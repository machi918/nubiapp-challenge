import {FC} from 'react';
import {useAppDispatch} from 'redux/redux-hooks';
import {modifyUser} from 'redux/slices/userSlice';
import {View, Text, Button} from 'react-native';

export const SignInScreen: FC = () => {
  const dispath = useAppDispatch();

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>LOGIN</Text>
      <Button
        title="Go to Details"
        onPress={() => dispath(modifyUser({token: 'asdasdasdasd'}))}
      />
    </View>
  );
};
