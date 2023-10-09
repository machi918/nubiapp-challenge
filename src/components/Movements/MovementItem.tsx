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
      <View
        style={[
          styles.iconContainer,
          !!extraData && {backgroundColor: extraData?.color},
        ]}>
        <Text style={styles.iconText}>ico</Text>
      </View>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.title}>{date}</Text>
      </View>
      <Text>{amount}</Text>
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
    backgroundColor: 'green',
  },
  iconContainer: {
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
    textAlign: 'center',
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: 'black',
  },
});
