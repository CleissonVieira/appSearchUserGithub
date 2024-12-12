import React, { useState } from 'react';
import { View, TextInput, Text, Image, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Toast from 'react-native-toast-message';

import { setUserDetails, setUserName } from '../../redux/slices/userSlice';
import { fetchUser } from '../../services/githubApi';
import CustomButton from '../../components/CustomButton/CustomButton';
import styles from './styles';

interface Props {
  navigation: StackNavigationProp<any, 'HomeScreen'>;
}

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();

  const handleSearch = async () => {
    if (username) {
      try {
        const userData = await fetchUser(username);
        dispatch(setUserName(username));
        dispatch(setUserDetails(userData));

        navigation.navigate('UserDetailsScreen');
      } catch (error) {
        Toast.show({ type: 'error', text1: 'Error', text2: `Error fetching user data: ${error}`, position: 'bottom' });
      }
    } else {
      Toast.show({ type: 'info', text1: 'Input Required', text2: 'Please enter a username to search.', position: 'bottom' });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity accessibilityLabel="Menu Button">
          <Icon name="notes" size={35} color="#333" />
        </TouchableOpacity>
        <Image
          source={{
            uri: 'https://via.placeholder.com/50',
          }}
          style={styles.profileImage}
          accessibilityLabel="Profile Image"
        />
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.title}>Find</Text>
        <Text style={[styles.title, styles.titleOpacity]}> a dev</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Search a dev"
          placeholderTextColor="#999"
          value={username}
          onChangeText={setUsername}
          accessibilityLabel="Username Input"
        />
        <Icon name="search" size={28} color="#666" style={styles.icon} />
      </View>

      <CustomButton title="Find" onPress={handleSearch} />
    </View>
  );
};

export default HomeScreen;