/* eslint-disable react/no-unstable-nested-components */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {TabBar} from 'navigation/components/TabBar';
import {HomeScreen, ProfileScreen} from 'screens/main';
import {HomeNavigator} from './HomeNavigator';

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      tabBar={props => <TabBar {...props} />}
      screenOptions={{headerShown: false}}>
      <Tab.Screen name="HomeStack" component={HomeNavigator} />
      <Tab.Screen name="Card" component={ProfileScreen} />
      <Tab.Screen name="Activity" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};
