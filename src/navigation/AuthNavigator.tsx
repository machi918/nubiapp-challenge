import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {SignInScreen, SignUpScreen} from '@src/screens/authentication';

const Stack = createNativeStackNavigator();

export const AuthNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="SignIn"
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{title: 'SignIn'}}
      />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
    </Stack.Navigator>
  );
};
