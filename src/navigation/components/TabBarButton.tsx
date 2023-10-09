import {FC} from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

import {TabBarParamList} from '../main-navigation/TabNavigator';

import {BottomTabBarButtonProps} from '@react-navigation/bottom-tabs';
import IconFeather from 'react-native-vector-icons/Feather';
import IconEntypo from 'react-native-vector-icons/Entypo';

// import Icon from 'react-native-vector-icons/Feather';

type TabBarButtonType = BottomTabBarButtonProps & {
  label: string;
  isFocused: boolean;
  routeName: string;
};

const navigationIconsSwitcher = (
  route: keyof TabBarParamList,
  color: string,
) => {
  switch (route) {
    case 'HomeStack':
      return <IconFeather name="home" color={color} size={24} />;
    case 'Card':
      return <IconFeather name="credit-card" color={color} size={24} />;
    case 'Activity':
      return <IconEntypo name="swap" color={color} size={24} />;
    case 'Profile':
      return <IconFeather name="user" color={color} size={24} />;

    default:
      return <IconFeather name="home" color={color} />;
  }
};

export const TabBarButton: FC<Partial<TabBarButtonType>> = ({
  label,
  isFocused,
  routeName,
  ...props
}) => {
  return (
    <TouchableOpacity
      {...props}
      style={styles(isFocused ? '#202BCE' : '#FFFFFF').container}>
      {navigationIconsSwitcher(
        routeName as keyof TabBarParamList,
        isFocused ? '#FFFFFF' : '#202BCE',
      )}
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
      height: 70,
      width: 70,
      backgroundColor: bgcolor,
      borderRadius: 10,
      padding: 5,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      color: bgcolor,
      fontSize: 10,
      textTransform: 'uppercase',
      marginTop: 4,
    },
  });
};
