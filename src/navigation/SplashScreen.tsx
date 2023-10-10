import {FC} from 'react';
import {ActivityIndicator, StyleSheet} from 'react-native';

import {CenteredView, LogoHeader} from '@src/components';
import {CustomLightTheme} from '@src/theme';

export const SplashScreen: FC = () => {
  return (
    <CenteredView
      style={[
        styles.container,
        {backgroundColor: CustomLightTheme.colors.primary},
      ]}>
      <LogoHeader color={CustomLightTheme.colors.card} />
      <ActivityIndicator
        size={'large'}
        color={CustomLightTheme.colors.card}
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
