import {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const SplashScreen: FC = () => {
  return (
    <View style={styles.container}>
      <Text>SplashScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {justifyContent: 'center', alignItems: 'center', flex: 1},
});
