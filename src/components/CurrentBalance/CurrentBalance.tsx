import {Button} from 'components/Button/Button';
import {FC, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

type Props = {
  name: string;
  balance: string; //Should be number
  onLoadMoneyPressed: () => void;
  onWithdrawMoneyPressed: () => void;
};

export const CurrentBalance: FC<Props> = ({
  name,
  balance,
  onLoadMoneyPressed,
  onWithdrawMoneyPressed,
}) => {
  const [showBalance, setShowBalance] = useState<boolean>(true);

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeTitle}>Hola {name} tu saldo es</Text>
      <View style={styles.balanceContainer}>
        <View style={{height: 50, width: 50}} />
        <Text>$ {showBalance ? balance : '*.****,**'}</Text>
        <View style={{height: 50, width: 50, backgroundColor: 'red'}} />
      </View>
      <View style={styles.buttonsContainer}>
        <Button
          label="Cargá plata"
          type="contained"
          size="small"
          onPress={onLoadMoneyPressed}
        />

        <Button
          label="Retirá plata"
          type="contained"
          style={{backgroundColor: 'red'}}
          size="small"
          onPress={onWithdrawMoneyPressed}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 14,
    padding: 20,
    marginVertical: 10,

    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  balanceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  welcomeTitle: {
    fontFamily: 'Poppins-Regular',
    color: '#000000',
    fontSize: 18,
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // justifyContent: 'space-between',
    gap: 10,
    width: '100%',
  },
});
