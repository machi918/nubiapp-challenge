import {FC} from 'react';

import {useTheme} from '@react-navigation/native';

import {ScreenView, Text} from '@src/components';

export const ActivityScreen: FC = () => {
  const {colors} = useTheme();

  return (
    <ScreenView justifyContent="center" alignItems="center">
      <Text textType="medium" fontSize={20} color={colors.text}>
        Activity Screen!
      </Text>
    </ScreenView>
  );
};
