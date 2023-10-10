import {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {HomeStackParamList} from '@src/navigation';
import {DEFAULT_BORDER_RADIUS} from '@src/theme';
import {UserMovement} from '@src/types';

import {MovementItem} from './MovementItem';
import {Button} from '../Button/Button';

type Props = {
  movements: UserMovement[]; //Should be number
};

type NavProps = NativeStackNavigationProp<HomeStackParamList>;

export const Movements: FC<Props> = ({movements}) => {
  const navigation = useNavigation<NavProps>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Movimientos</Text>
      <View style={styles.movementsContainer}>
        {movements?.map(item => (
          <MovementItem key={item.date} {...item} amount={item['amount ']} />
        ))}
        {movements?.length === 0 && (
          <Text style={styles.notAvailableText}>No hay movimientos</Text>
        )}
      </View>
      <Button
        type="text"
        label="Ver más..."
        size="medium"
        onPress={() => navigation.navigate('MovementsScreen')}
        style={styles.buttonTextStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginVertical: 10,
    borderRadius: DEFAULT_BORDER_RADIUS,
    paddingVertical: 20,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  movementsContainer: {
    alignItems: 'center',
    rowGap: 10,
    width: '100%',
  },
  title: {
    fontFamily: 'Poppins-Medium',
    color: '#000000',
    fontSize: 20,
    marginTop: -10,
  },
  notAvailableText: {
    width: '100%',
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
  },
  buttonTextStyle: {marginTop: 10, marginBottom: -10},
});
