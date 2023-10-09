import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {SignInScreen, SignUpScreen} from 'screens/authentication';

const Stack = createNativeStackNavigator();

export const AuthNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="SignIn">
      <Stack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{title: 'SignIn'}}
      />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
    </Stack.Navigator>
  );
};