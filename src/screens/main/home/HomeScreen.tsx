import {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const HomeScreen: FC = () => {
  return (
    <View style={styles.container}>
      <Text style={{fontFamily: 'Poppins-Bold', fontSize: 20}}>Home!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
