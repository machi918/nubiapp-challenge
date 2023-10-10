import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen, MovementsScreen} from '@src/screens/main';

// import {HomeScreen, MovementsScreen} from 'screens/main';

const Stack = createNativeStackNavigator();

export type HomeStackParamList = {
  HomeScreen: undefined;
  MovementsScreen: undefined;
};

export const HomeNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="MovementsScreen" component={MovementsScreen} />
    </Stack.Navigator>
  );
};
