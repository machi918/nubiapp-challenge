import {FC} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

import {CenteredView} from '../CenteredView/CenteredView';

type Props = {
  title: string;
};

export const Header: FC<Props> = ({title}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" size={24} color={'#000000'} />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <CenteredView style={styles.iconContainer} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 10,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
  },
  iconContainer: {
    height: 24,
    width: 24,
  },
  title: {fontFamily: 'Poppins-Bold', fontSize: 20, color: '#000000'},
});
