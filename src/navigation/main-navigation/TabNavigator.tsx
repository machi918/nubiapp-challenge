/* eslint-disable react/no-unstable-nested-components */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {ActivityScreen, CardScreen, ProfileScreen} from '@src/screens/main';

import {HomeNavigator} from './HomeNavigator';
import {TabBar} from '../components/TabBar';

export type TabBarParamList = {
  HomeStack: undefined;
  Card: undefined;
  Activity: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<TabBarParamList>();

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      tabBar={props => <TabBar {...props} />}
      screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="HomeStack"
        component={HomeNavigator}
        options={{title: 'inicio'}}
      />
      <Tab.Screen
        name="Card"
        component={CardScreen}
        options={{title: 'tarjeta'}}
      />
      <Tab.Screen
        name="Activity"
        component={ActivityScreen}
        options={{title: 'actividad'}}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{title: 'perfil'}}
      />
    </Tab.Navigator>
  );
};
