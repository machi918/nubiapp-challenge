import {FC} from 'react';

import {useTheme} from '@react-navigation/native';

import {Header, ScreenView, Text} from '@src/components';

export const ForgetPasswordScreen: FC = () => {
  const {colors} = useTheme();
  return (
    <ScreenView alignItems="center" bgColor={colors.card}>
      <Header title={'Recuperar password'} />
      <Text textType="bold">Olvidé mi contraseña</Text>
    </ScreenView>
  );
};
