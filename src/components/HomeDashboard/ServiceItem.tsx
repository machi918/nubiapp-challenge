import {FC, useCallback} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {ServicesType} from '@src/types';

type Props = ServicesType & {
  onPress: (id: string, title: string) => void;
  extraData?: {emoji: string; color: string};
};

export const ServiceItem: FC<Props> = ({
  id,
  title,
  onPress,
  icon,
  extraData,
}) => {
  const handlePress = useCallback(() => {
    onPress(id!, title);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, title]);

  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <View
        style={[
          styles.iconContainer,
          !!extraData && {backgroundColor: extraData?.color},
        ]}>
        <Text style={styles.iconText}>
          {extraData ? extraData?.emoji : icon}
        </Text>
      </View>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 110,
    width: 70,
  },
  iconContainer: {
    height: 70,
    width: 70,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    fontSize: 40,
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
