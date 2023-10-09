import {Button} from 'components';
import {useSecureStorage} from 'hooks/useSecureStorage';
import {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useAppDispatch} from 'redux/redux-hooks';
import {resetErrorsState} from 'redux/slices/errorsSlice';
import {resetNavigationState} from 'redux/slices/navigationSlice';
import {resetServicesState} from 'redux/slices/servicesSlice';
import {resetUserState} from 'redux/slices/userSlice';

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
      <Text>Profile!</Text>
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
});
