import {FC} from 'react';
import {StyleSheet, Text} from 'react-native';

import {ScreenView} from '@src/components';

export const ActivityScreen: FC = () => {
  return (
    <ScreenView justifyContent="center" alignItems="center">
      <Text style={styles.text}>Activity Screen!</Text>
    </ScreenView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Poppins-Medium',
    fontSize: 20,
  },
});
