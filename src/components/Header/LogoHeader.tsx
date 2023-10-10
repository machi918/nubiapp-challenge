import {FC} from 'react';
import {StyleSheet} from 'react-native';

import {CompleteLogoIcon} from '@src/assets';

import {CenteredView} from '../CenteredView/CenteredView';

export const LogoHeader: FC<{color?: string}> = ({color}) => {
  return (
    <CenteredView style={styles.container}>
      <CompleteLogoIcon fill={color} />
    </CenteredView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 5,
  },
});
