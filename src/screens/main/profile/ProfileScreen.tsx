import {FC, useState} from 'react';

import {useTheme} from '@react-navigation/native';

import {Button, DummyComponentWError, ScreenView, Text} from '@src/components';
import {useSecureStorage} from '@src/hooks';
import {useAppDispatch} from '@src/redux/redux-hooks';
import {resetNavigationState} from '@src/redux/slices/navigationSlice';
import {resetServicesState} from '@src/redux/slices/servicesSlice';
import {resetUserState} from '@src/redux/slices/userSlice';
import service from '@src/services/axios-instance';

export const ProfileScreen: FC = () => {
  const dispatch = useAppDispatch();
  const {colors} = useTheme();
  const {removeItem} = useSecureStorage();
  const [throwError, setThrowError] = useState<boolean>(false);

  const handleSignOut = async () => {
    try {
      await removeItem('token');
      dispatch(resetNavigationState());
      dispatch(resetServicesState());
      dispatch(resetUserState());
      service.setToken(undefined); // Deletes token from axios default
    } catch (error) {
      // Should launch an Alert or Modal
    }
  };

  return (
    <ScreenView alignItems="center" justifyContent="center">
      <Text textType="medium" fontSize={20} color={colors.text}>
        Profile Screen!
      </Text>
      <Button
        type="outlined"
        label="Cerrar sesión"
        size="big"
        onPress={handleSignOut}
      />

      <Text fontSize={14} color={colors.text}>
        Para testear el Error Boundary, seleccione:
      </Text>
      <Button
        type="text"
        label="Lanzar error"
        size="small"
        onPress={() => setThrowError(true)}
      />
      {throwError && <DummyComponentWError />}
    </ScreenView>
  );
};
