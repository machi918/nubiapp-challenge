import {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {ServicesType} from '@src/types';
import {SERVICES_DUMMY_EXTRA_DATA} from '@src/utils';

import {ServiceItem} from './ServiceItem';
import {CenteredView} from '../CenteredView/CenteredView';

type Props = {
  name: string;
  services: ServicesType[]; //Should be number
};

export const HomeDashboard: FC<Props> = ({name, services}) => {
  const handleServicePress = (_id: string, title: string) => {
    console.log('PRESIONE:', title);
  };

  return (
    <CenteredView style={styles.container}>
      <Text style={styles.title}>👋 Hola {name},</Text>
      <Text style={styles.title}>¿Qué deseas hacer hoy?</Text>
      <View style={styles.servicesContainer}>
        {services?.map(item => (
          <ServiceItem
            key={item.id}
            {...item}
            onPress={handleServicePress}
            extraData={SERVICES_DUMMY_EXTRA_DATA?.find(
              data => data.title === item.title,
            )}
          />
        ))}
        {services?.length === 0 && (
          <Text style={styles.notAvailableText}>
            No hay servicios disponibles
          </Text>
        )}
      </View>
    </CenteredView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginVertical: 10,
    borderRadius: 14,
    paddingVertical: 20,
    paddingHorizontal: 20,
    width: '100%',
  },
  servicesContainer: {
    flexDirection: 'row',
    paddingHorizontal: 40,
    flexWrap: 'wrap',
    gap: 10,
    alignItems: 'center',
    width: '100%',
  },
  title: {
    fontFamily: 'Poppins-Regular',
    color: '#000000',
    fontSize: 14,
  },
  notAvailableText: {
    width: '100%',
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
  },
});
