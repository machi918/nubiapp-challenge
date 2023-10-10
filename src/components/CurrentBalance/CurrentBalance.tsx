import {FC, useState} from 'react';
import {Pressable, StyleSheet, View} from 'react-native';

import Icon from 'react-native-vector-icons/Entypo';

import {Button} from '../Button/Button';
import {CenteredView} from '../CenteredView/CenteredView';
import {Text} from '../Text/Text';

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
    <CenteredView style={styles.container}>
      <Text fontSize={18}>Hola {name} tu saldo es</Text>
      <View style={styles.balanceContainer}>
        <View style={styles.iconContainer} />
        <Text>
          ${' '}
          {
            <Text textType="medium" fontSize={40}>
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
      <CenteredView style={styles.buttonsContainer}>
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
      </CenteredView>
    </CenteredView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 14,
    padding: 20,
    marginVertical: 10,
    width: '100%',
  },
  balanceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: 50,
  },
  buttonsContainer: {
    flexDirection: 'row',
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
