import {FC} from 'react';
import {StyleSheet, Text} from 'react-native';

import {useTheme} from '@react-navigation/native';

import {ScreenView} from '@src/components';

export const CardScreen: FC = () => {
  const {colors} = useTheme();

  return (
    <ScreenView justifyContent="center" alignItems="center">
      <Text style={[styles.text, {color: colors.text}]}>Card Screen!</Text>
    </ScreenView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Poppins-Medium',
    fontSize: 20,
  },
});
