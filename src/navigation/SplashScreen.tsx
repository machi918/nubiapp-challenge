import {FC} from 'react';
import {ActivityIndicator, StyleSheet} from 'react-native';

import {useTheme} from '@react-navigation/native';

import {CenteredView, LogoHeader} from '@src/components';

export const SplashScreen: FC = () => {
  const {colors} = useTheme();
  return (
    <CenteredView style={[styles.container, {backgroundColor: colors.primary}]}>
      <LogoHeader color={colors.card} />
      <ActivityIndicator
        size={'large'}
        color={colors.card}
        style={styles.activity}
      />
    </CenteredView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  activity: {
    marginTop: 20,
  },
});
