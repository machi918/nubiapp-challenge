import {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

import {DEFAULT_BORDER_RADIUS} from '@src/theme';
import {UserMovement} from '@src/types';

type Props = UserMovement & {
  extraData?: {emoji: string; color: string};
};

export const MOVEMENT_ITEM_HEIGHT = 60; // Use for flatlist optimizations

export const MovementItem: FC<Props> = ({amount, date, title}) => {
  return (
    <View style={styles.container}>
      <View style={styles.dataWrapper}>
        <View style={styles.iconContainer}>
          <Icon name="help-circle" size={24} />
        </View>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.dateText}>{date}</Text>
        </View>
      </View>
      <Text style={styles.title}>{amount}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: MOVEMENT_ITEM_HEIGHT,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dataWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    marginRight: 10,
    height: 50,
    width: 50,
    borderRadius: DEFAULT_BORDER_RADIUS,
    justifyContent: 'center',
    backgroundColor: '#b3f5b0',
    alignItems: 'center',
  },
  iconText: {
    fontSize: 10,
    opacity: 1,
    color: 'black',
  },
  title: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: 'black',
    textTransform: 'capitalize',
  },
  dateText: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
  },
});
