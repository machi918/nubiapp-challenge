import {CurrentBalance, HomeDashboard, LogoHeader, Movements} from 'components';
import {FC} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {useAppSelector} from 'redux/redux-hooks';

export const HomeScreen: FC = () => {
  const userState = useAppSelector(state => state.user);
  const userServices = useAppSelector(state => state.services);

  return (
    <ScrollView
      style={styles.container}
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
    paddingHorizontal: 20,
    alignItems: 'center',
  },
});
