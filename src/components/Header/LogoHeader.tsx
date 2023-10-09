import {FC} from 'react';
import {View, StyleSheet} from 'react-native';

import {CompleteLogoIcon} from 'assets/icons';

export const LogoHeader: FC<{color?: string}> = ({color}) => {
  return (
    <View style={styles.container}>
      <CompleteLogoIcon fill={color} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
