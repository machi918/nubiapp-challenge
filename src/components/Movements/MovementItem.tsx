import {FC} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {UserMovement} from 'types';

type Props = UserMovement & {
  //   onPress: (id: string, title: string) => void;
  extraData?: {emoji: string; color: string};
};

// TODO: DECIR QUE ESTA MAL AMOUNT

export const MovementItem: FC<Props> = ({amount, date, title, extraData}) => {
  return (
    <View style={styles.container}>
      <View style={styles.dataWrapper}>
        <View
          style={[
            styles.iconContainer,
            !!extraData && {backgroundColor: extraData?.color},
          ]}>
          <Text style={styles.iconText}>ico</Text>
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
    height: 60,
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
    borderRadius: 14,
    justifyContent: 'center',
    backgroundColor: 'red',
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
