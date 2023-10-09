import {FC} from 'react';
import {View, StyleSheet} from 'react-native';

import {BottomTabBarProps} from '@react-navigation/bottom-tabs';

// import {useAppSelector} from 'redux/redux-hooks';
import {TabBarButton} from './TabBarButton';

// const dummyData = ['Inicio', 'Tarjeta', 'Actividad', 'Perfil'];

export const TabBar: FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  //   const navigationState = useAppSelector(rstate => rstate.navigation);

  return (
    <View style={styles.tabContainer}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };
        return (
          <TabBarButton
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            isFocused={isFocused}
            label={label.toString()}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    backgroundColor: 'red',
    position: 'absolute',
    bottom: 14,
    borderRadius: 16,
    height: 80,
    left: 10,
    right: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    zIndex: 1000,
  },
});
