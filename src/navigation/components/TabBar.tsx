import {FC} from 'react';
import {View, StyleSheet} from 'react-native';

import {BottomTabBarProps} from '@react-navigation/bottom-tabs';

import {useAppSelector} from 'redux/redux-hooks';
import {TabBarButton} from './TabBarButton';

export const TabBar: FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  const navigationState = useAppSelector(rstate => rstate.navigation); // Manejo dinámico del tab bar
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
        return navigationState?.includes(label.toString()) ? (
          <TabBarButton
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            isFocused={isFocused}
            routeName={route.name}
            label={label.toString()}
          />
        ) : null;
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    bottom: 14,
    borderRadius: 16,
    height: 90,
    left: 10,
    right: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    zIndex: 1000,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
