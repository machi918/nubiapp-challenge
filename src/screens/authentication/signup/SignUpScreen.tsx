import {FC} from 'react';

import {useTheme} from '@react-navigation/native';

import {Header, ScreenView, Text} from '@src/components';

export const SignUpScreen: FC = () => {
  const {colors} = useTheme();
  return (
    <ScreenView alignItems="center" bgColor={colors.card}>
      <Header title={'Registrarse'} />
      <Text textType="medium" fontSize={26}>
        Registro
      </Text>
    </ScreenView>
  );
};
