import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  ForgetPasswordScreen,
  SignInScreen,
  SignUpScreen,
} from '@src/screens/authentication';

const Stack = createNativeStackNavigator();

export type AuthStackParamList = {
  SignInScreen: undefined;
  SignUpScreen: undefined;
  ForgetPasswordScreen: undefined;
};

export const AuthNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="SignInScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="SignInScreen" component={SignInScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      <Stack.Screen
        name="ForgetPasswordScreen"
        component={ForgetPasswordScreen}
      />
    </Stack.Navigator>
  );
};
