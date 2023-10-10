import {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {Button} from '@src/components';
import {useSecureStorage} from '@src/hooks';
import {useAppDispatch} from '@src/redux/redux-hooks';
import {resetErrorsState} from '@src/redux/slices/errorsSlice';
import {resetNavigationState} from '@src/redux/slices/navigationSlice';
import {resetServicesState} from '@src/redux/slices/servicesSlice';
import {resetUserState} from '@src/redux/slices/userSlice';

export const ProfileScreen: FC = () => {
  const dispatch = useAppDispatch();
  const {removeItem} = useSecureStorage();

  const handleSignOut = async () => {
    await removeItem('token');
    dispatch(resetNavigationState());
    dispatch(resetServicesState());
    dispatch(resetErrorsState());
    dispatch(resetUserState());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profile Screen!</Text>
      <Button
        type="outlined"
        label="Cerrar sesión"
        size="big"
        onPress={handleSignOut}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Poppins-Medium',
    fontSize: 20,
  },
});
