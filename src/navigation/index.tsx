import React from 'react';
import { TouchableOpacity } from 'react-native';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import RepositoryListScreen from '../screens/RepositoryListScreen/RepositoryListScreen';
import RepositoryDetailsScreen from '../screens/RepositoryDetailsScreen/RepositoryDetailsScreen';
import UserDetailsScreen from '../screens/UserDetailsScreen/UserDetailsScreen';

const Stack = createStackNavigator();

const defaultScreenOptions: StackNavigationOptions = { headerBackTitle: '', headerTintColor: 'black' };

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomeScreen"
        screenOptions={defaultScreenOptions}
      >
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            title: 'Home',
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="RepositoryListScreen"
          component={RepositoryListScreen}
          options={({ navigation }) => ({
            title: 'Repositories',
            headerRight: () => (
              <TouchableOpacity
                style={styles.homeButton}
                onPress={() => navigation.navigate('HomeScreen')}
              >
                <Icon name="home" size={32} color="black" />
              </TouchableOpacity>
            ),
          })}
        />

        <Stack.Screen
          name="RepositoryDetailsScreen"
          component={RepositoryDetailsScreen}
          options={({ navigation }) => ({
            title: 'Repository',
            headerRight: () => (
              <TouchableOpacity
                style={styles.homeButton}
                onPress={() => navigation.navigate('HomeScreen')}
              >
                <Icon name="home" size={32} />
              </TouchableOpacity>
            ),
          })}
        />

        <Stack.Screen
          name="UserDetailsScreen"
          component={UserDetailsScreen}
          options={{
            title: 'Profile',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator