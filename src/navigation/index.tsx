import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from '../screens/HomeScreen';
import UserDetailsScreen from '../screens/UserDetailsScreen';
import ReposListScreen from '../screens/ReposListScreen';
import RepoDetailsScreen from '../screens/RepoDetailsScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="UserDetails" component={UserDetailsScreen} />
        <Stack.Screen name="ReposList" component={ReposListScreen} />
        <Stack.Screen name="RepoDetails" component={RepoDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
