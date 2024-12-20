import React from 'react';
import { Provider } from 'react-redux';
import Toast from 'react-native-toast-message';

import { store } from './src/redux/store';
import AppNavigator from './src/navigation';

export default function App() {
  return (
    <Provider store={store}>
      <>
        <AppNavigator />
        <Toast />
      </>
    </Provider>
  );
}