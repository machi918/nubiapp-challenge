import {Button} from 'components/Button/Button';
import {FC, useState} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

type Props = {
  name: string;
  balance: number;
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
        <View style={styles.iconContainer} />
        <Text>
          ${' '}
          {
            <Text style={styles.balanceText}>
              {showBalance
                ? balance.toLocaleString('es-AR', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })
                : '*.****,**'}
            </Text>
          }
        </Text>
        <Pressable
          style={styles.iconContainer}
          onPress={() => setShowBalance(prevValue => !prevValue)}>
          <Icon
            name={showBalance ? 'eye' : 'eye-with-line'}
            size={30}
            color="black"
          />
        </Pressable>
      </View>
      <View style={styles.buttonsContainer}>
        <Button
          label="+ Cargá plata"
          type="contained"
          size="small"
          onPress={onLoadMoneyPressed}
        />

        <Button
          label="- Retirá plata"
          type="contained"
          style={styles.customButton}
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
    height: 50,
  },
  balanceText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 40,
    color: '#000000',
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
    gap: 10,
    width: '100%',
    marginTop: 10,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
  },
  customButton: {
    backgroundColor: '#2DDCB4',
  },
});
