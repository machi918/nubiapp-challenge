import {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const ActivityScreen: FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Activity Screen!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Poppins-Medium',
    fontSize: 20,
  },
});
