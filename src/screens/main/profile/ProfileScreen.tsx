import {FC} from 'react';
import {StyleSheet, Text} from 'react-native';

import {useTheme} from '@react-navigation/native';

import {Button, ScreenView} from '@src/components';
import {useSecureStorage} from '@src/hooks';
import {useAppDispatch} from '@src/redux/redux-hooks';
import {resetErrorsState} from '@src/redux/slices/errorsSlice';
import {resetNavigationState} from '@src/redux/slices/navigationSlice';
import {resetServicesState} from '@src/redux/slices/servicesSlice';
import {resetUserState} from '@src/redux/slices/userSlice';

export const ProfileScreen: FC = () => {
  const dispatch = useAppDispatch();
  const {colors} = useTheme();
  const {removeItem} = useSecureStorage();

  const handleSignOut = async () => {
    await removeItem('token');
    dispatch(resetNavigationState());
    dispatch(resetServicesState());
    dispatch(resetErrorsState());
    dispatch(resetUserState());
  };

  return (
    <ScreenView alignItems="center" justifyContent="center">
      <Text style={[styles.text, {color: colors.text}]}>Profile Screen!</Text>
      <Button
        type="outlined"
        label="Cerrar sesión"
        size="big"
        onPress={handleSignOut}
      />
    </ScreenView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Poppins-Medium',
    fontSize: 20,
  },
});
