import React from 'react';
import { TouchableOpacity, Text, ViewStyle } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

import styles from './styles';

interface ButtonProps {
  title: string;
  onPress: () => void;
  color?: string;
  textColor?: string;
  fontWeight?: string;
  width?: ViewStyle['width'];
  paddingVertical?: ViewStyle['paddingVertical'];
  fontSize?: number;
}

const AnimatedTouchableOpacity =
  Animated.createAnimatedComponent(TouchableOpacity);

const CustomButton: React.FC<ButtonProps> = ({
  title,
  onPress,
  color = '#007BFF',
  textColor = '#fff',
  fontWeight = '700',
  width = '100%',
  paddingVertical = 12,
  fontSize = 16,
}) => {
  const animatedOpacity = useSharedValue(1);

  const handlePressIn = () => {
    animatedOpacity.value = withTiming(0.2, { duration: 200 });
  };

  const handlePressOut = () => {
    animatedOpacity.value = withTiming(1, { duration: 200 });
  };

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: animatedOpacity.value,
  }));

  return (
    <AnimatedTouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor: color,
          width: width,
          paddingVertical: paddingVertical,
        },
        animatedStyle,
      ]}
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      activeOpacity={1}
      accessibilityLabel={title}
    >
      <Text
        style={[
          { fontWeight: fontWeight, fontSize: fontSize, color: textColor },
        ]}
      >
        {title}
      </Text>
    </AnimatedTouchableOpacity>
  );
};

export default CustomButton;
