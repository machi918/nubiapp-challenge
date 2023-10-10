import {FC} from 'react';
import {ScrollView, StyleSheet} from 'react-native';

import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {
  CurrentBalance,
  HomeDashboard,
  LogoHeader,
  Movements,
} from '@src/components';
import {useAppSelector} from '@src/redux/redux-hooks';
import {DEFAULT_H_PADDING} from '@src/theme';

export const HomeScreen: FC = () => {
  const userState = useAppSelector(state => state.user);
  const userServices = useAppSelector(state => state.services);
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      style={[
        styles.container,
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
      ]}
      contentContainerStyle={styles.contentContainer}>
      <LogoHeader />
      <CurrentBalance
        name={userState.name}
        balance={7760}
        onLoadMoneyPressed={() => console.log('add money')}
        onWithdrawMoneyPressed={() => console.log('withdraw money')}
      />
      <HomeDashboard name={userState.name} services={userServices} />
      <Movements movements={userState?.movements} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingBottom: 100,
    paddingHorizontal: DEFAULT_H_PADDING,
    alignItems: 'center',
  },
});
