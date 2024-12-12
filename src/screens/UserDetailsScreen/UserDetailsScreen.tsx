import React from 'react';
import { View, Text, Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Toast from 'react-native-toast-message';

import { RootState } from '../../redux/store';
import CustomButton from '../../components/CustomButton/CustomButton';
import styles from './styles';

interface Props {
  navigation: StackNavigationProp<any, 'UserDetails'>;
}

const UserDetailsScreen: React.FC<Props> = ({ navigation }) => {
  const user = useSelector((state: RootState) => state.user.details);

  if (!user) {
    Toast.show({ type: 'error', text1: 'Error', text2: 'User not found.', position: 'bottom', });

    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>User not found.</Text>
        <Toast />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: user.avatar_url }} style={styles.headerImage} accessibilityLabel="User Profile Image"/>

      <View style={styles.content}>
        <View style={styles.nameSave}>
          <Text style={styles.name}>
            {user.name ?? user.company ?? 'Name not found'}
          </Text>
          <Icon name="turned-in" size={24} />
        </View>

        <Text style={styles.email}>{user.email ?? 'Email not found'}</Text>
        <Text style={styles.bio}>{user.bio ?? 'Description not found'}</Text>
      </View>

      <View style={styles.footer}>
        <View style={styles.statsContainer}>
          <View style={styles.statBox}>
            <Text style={styles.statLabel}>Followers</Text>
            <Text style={styles.statValue}>{user.followers ?? 0}</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.statBox}>
            <Text style={styles.statLabel}>Following</Text>
            <Text style={styles.statValue}>{user.following ?? 0}</Text>
          </View>
        </View>

        <CustomButton
          title="See repositories"
          onPress={() => navigation.navigate('RepositoryListScreen')}
          color="green"
        />
      </View>
    </View>
  );
};

export default UserDetailsScreen;