import React, { useEffect, useState } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Toast from 'react-native-toast-message';

import { RootState } from '../../redux/store';
import { setRepositories, setOrder } from '../../redux/slices/repositoriesSlice';
import { fetchRepositories } from '../../services/githubApi';
import CustomButton from '../../components/CustomButton/CustomButton';
import CustomLoading from '../../components/CustomLoading/CustomLoading';
import styles from './styles';

interface Props {
  navigation: StackNavigationProp<any, 'RepositoryListScreen'>;
}

const RepositoryListScreen: React.FC<Props> = ({ navigation }: any) => {
  const { username } = useSelector((state: RootState) => state.user);
  const repositories = useSelector((state: RootState) => state.repositories);
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  const getRepositories = async () => {
    if (username) {
      setLoading(true);
      try {
        const repositoryList = await fetchRepositories(username);
        dispatch(setRepositories(repositoryList));
        setLoading(false);
      } catch (error) {
        setLoading(false);
        Toast.show({ type: 'error', text1: 'Error', text2: `Error fetching repository list: ${error}`, position: 'bottom', });
      }
    }
  };

  useEffect(() => {
    if (username) {
      getRepositories();
    }
  }, [username]);

  const handleSortChange = (order: 'asc' | 'desc') => {
    dispatch(setOrder(order));
  };

  const truncateText = (text: string, limit: number) => {
    return text.length > limit ? text.slice(0, limit) + '...' : text;
  };

  if (loading) { return (<CustomLoading />); }

  return (
    <View style={styles.container}>
      <View style={styles.sortContainer}>
        <TouchableOpacity
          style={styles.sortButton}
          onPress={() =>
            handleSortChange(repositories.order === 'asc' ? 'desc' : 'asc')
          }
          accessibilityLabel="Sort Button"
        >
          <Text style={styles.sortButtonText}>
            Sort by:{' '}
            <Text style={styles.highlightedText}>
              {repositories.order === 'asc' ? 'Least stars' : 'Most stars'}
            </Text>
          </Text>

          <Icon
            name={
              repositories.order === 'asc' ? 'arrow-drop-down' : 'arrow-drop-up'
            }
            size={20}
            color="#007BFF"
          />
        </TouchableOpacity>
      </View>

      <FlatList
        data={repositories.list}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.repoContainer}>
            <Image
              source={{ uri: 'https://via.placeholder.com/60' }}
              style={styles.repoImage}
              accessibilityLabel="Repository Image"
            />

            <View style={styles.repoInfo}>
              <View style={styles.repoHeader}>
                <Text style={styles.repoName} numberOfLines={1}>
                  {item.name}
                </Text>

                <Text
                  style={styles.repoDescription}
                  numberOfLines={2}
                  ellipsizeMode="tail"
                >
                  {item.description || 'No description'}
                </Text>
              </View>

              <View style={styles.repoView}>
                <View style={styles.repoDetails}>
                  <View style={styles.repoDetailsIcon}>
                    <Icon name="star-border" size={16} />

                    <Text style={styles.detailText}>
                      {item.stargazers_count}
                    </Text>
                  </View>

                  <View style={styles.repoDetailsIcon}>
                    <Icon
                      style={styles.rotate180}
                      name="device-hub"
                      size={16}
                    />

                    <Text style={styles.detailText}>{item.forks_count}</Text>
                  </View>

                  <View style={styles.repoDetailsIcon}>
                    <Icon name="circle" size={16} color="#A38A66" />

                    <Text style={styles.language}>
                      {truncateText(item.language || 'N/A', 8)}
                    </Text>
                  </View>
                </View>

                <CustomButton
                  title="Open"
                  onPress={() =>
                    navigation.navigate('RepositoryDetailsScreen', {
                      full_name: item.full_name,
                    })
                  }
                  color="rgba(0, 255, 100, 0.2)"
                  textColor="rgb(0, 153, 0)"
                  fontWeight="400"
                  width="22%"
                  paddingVertical={6}
                  fontSize={12}
                />
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default RepositoryListScreen;