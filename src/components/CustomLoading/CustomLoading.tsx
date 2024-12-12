import React from 'react';
import { View, ActivityIndicator } from 'react-native';

import styles from './styles';


const CustomButton: React.FC<any> = () => {
  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
};

export default CustomButton;
