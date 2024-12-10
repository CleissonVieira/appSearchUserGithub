import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

import HomeScreen from './src/screens/HomeScreen';
import RepositoryListScreen from './src/screens/RepositoryListScreen';
import RepositoryDetailsScreen from './src/screens/RepositoryDetailsScreen';
import UserDetailsScreen from './src/screens/UserDetailsScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="RepositoryList" component={RepositoryListScreen} />
          <Stack.Screen name="RepositoryDetails" component={RepositoryDetailsScreen} />
          <Stack.Screen name="UserDetails" component={UserDetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
