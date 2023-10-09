import {CurrentBalance, HomeDashboard, Movements} from 'components';
import {FC} from 'react';
import {Text, StyleSheet, ScrollView} from 'react-native';
import {useAppSelector} from 'redux/redux-hooks';

export const HomeScreen: FC = () => {
  const userState = useAppSelector(state => state.user);
  const userServices = useAppSelector(state => state.services);

  return (
    <ScrollView style={{flex: 1}} contentContainerStyle={styles.container}>
      <Text style={{fontFamily: 'Poppins-Bold', fontSize: 20}}>Home!</Text>
      <CurrentBalance
        name={userState.name}
        balance={'123123'}
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
    paddingBottom: 100,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
});
