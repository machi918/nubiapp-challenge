import {FC} from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

import {BottomTabBarButtonProps} from '@react-navigation/bottom-tabs';

type TabBarButtonType = BottomTabBarButtonProps & {
  label: string;
  isFocused: boolean;
};

export const TabBarButton: FC<Partial<TabBarButtonType>> = ({
  label,
  isFocused,
  ...props
}) => {
  return (
    <TouchableOpacity
      {...props}
      style={styles(isFocused ? '#202BCE' : '#FFFFFF').container}>
      <Text style={styles(isFocused ? '#FFFFFF' : '#202BCE').text}>icon</Text>
      <Text style={styles(isFocused ? '#FFFFFF' : '#202BCE').text}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

// Puede generar más renders de lo necesario
const styles = (bgcolor: string) => {
  return StyleSheet.create({
    container: {
      height: 60,
      width: 60,
      backgroundColor: bgcolor,
      borderRadius: 10,
      padding: 5,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      color: bgcolor,
      fontSize: 10,
    },
  });
};
