import {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {UserMovement} from 'types';
import {MovementItem} from './MovementItem';
import {Button} from 'components';

type Props = {
  movements: UserMovement[]; //Should be number
};

export const Movements: FC<Props> = ({movements}) => {
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
        style={{marginTop: 10, marginBottom: -10}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginVertical: 10,
    borderRadius: 14,
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
    fontFamily: 'Poppins-Regular',
    color: '#000000',
    fontSize: 14,
  },
  notAvailableText: {
    width: '100%',
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
  },
});
