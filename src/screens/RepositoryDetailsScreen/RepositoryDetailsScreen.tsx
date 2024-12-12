import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Linking } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Toast from 'react-native-toast-message';

import { RootState } from '../../redux/store';
import { setRepositoryDetails } from '../../redux/slices/repositorySlice';
import { fetchRepository } from '../../services/githubApi';
import CustomButton from '../../components/CustomButton/CustomButton';
import CustomLoading from '../../components/CustomLoading/CustomLoading';
import styles from './styles';

interface Props {
  navigation: StackNavigationProp<any, 'RepositoryDetailsScreen'>;
  route: any;
}

const RepositoryDetailsScreen: React.FC<Props> = ({ route }) => {
  const { full_name } = route.params;
  const { username } = useSelector((state: RootState) => state.user);
  const repository = useSelector(
    (state: RootState) => state.repository.details,
  );
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const getRepository = async () => {
    if (full_name) {
      setLoading(true);
      try {
        const repository = await fetchRepository(full_name);
        dispatch(setRepositoryDetails(repository));
        setLoading(false);
      } catch (error) {
        setLoading(false);
        Toast.show({ type: 'error', text1: 'Error', text2: `Error fetching repository details: ${error}`, position: 'bottom', });
      }
    }
  };

  useEffect(() => {
    if (full_name) {
      getRepository();
    }
  }, [full_name]);

  if (loading) { return (<CustomLoading />); }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <Text style={styles.repoName}>{repository?.name}</Text>
          <Text style={styles.repoFullName}>{repository?.full_name}</Text>
        </View>

        <Text style={styles.description}>{repository?.description}</Text>
      </ScrollView>

      <View style={styles.statsContainer}>
        <View style={styles.statsBox}>
          <Icon name="star" size={20} color="#FFD700" />
          <Text style={styles.statsText}>{repository?.stargazers_count}</Text>
          <Text style={styles.statsLabel}>Stars</Text>
        </View>

        <View style={styles.statsBox}>
          <Icon name="visibility" size={20} color="#A38A66" />
          <Text style={styles.statsText}>{repository?.watchers_count}</Text>
          <Text style={styles.statsLabel}>Watchers</Text>
        </View>

        <View style={styles.statsBox}>
          <Icon
            style={styles.rotate180}
            name="device-hub"
            size={20}
            color="#A38A66"
          />
          <Text style={styles.statsText}>{repository?.forks_count}</Text>
          <Text style={styles.statsLabel}>Forks</Text>
        </View>

        <View style={styles.statsBox}>
          <Icon name="error-outline" size={20} color="#A38A66" />
          <Text style={styles.statsText}>{repository?.open_issues_count}</Text>
          <Text style={styles.statsLabel}>Issues</Text>
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.sectionTitle}>Details</Text>

        <View style={styles.detailsContainer}>
          <Text style={styles.detailLabel}>Language:</Text>
          <Text style={styles.detailValue}>{repository?.language}</Text>
        </View>

        <View style={styles.detailsContainer}>
          <Text style={styles.detailLabel}>Created At:</Text>
          <Text style={styles.detailValue}>
            {repository != null
              ? new Date(repository?.created_at).toLocaleDateString()
              : 'Not found'}
          </Text>
        </View>

        <View style={styles.detailsContainer}>
          <Text style={styles.detailLabel}>Updated At:</Text>
          <Text style={styles.detailValue}>
            {repository != null
              ? new Date(repository?.updated_at).toLocaleDateString()
              : 'Not found'}
          </Text>
        </View>

        <View style={styles.detailsContainer}>
          <Text style={styles.detailLabel}>Owner:</Text>
          <Text style={styles.detailValue}>{username}</Text>
        </View>

        <CustomButton
          title="Open in GitHub"
          onPress={() => Linking.openURL(repository?.html_url ?? '')}
        />
      </View>
    </ScrollView>
  );
};

export default RepositoryDetailsScreen;