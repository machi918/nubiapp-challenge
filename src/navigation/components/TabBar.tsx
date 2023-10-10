import {FC} from 'react';
import {StyleSheet, View} from 'react-native';

import {BottomTabBarProps} from '@react-navigation/bottom-tabs';

import {useAppSelector} from '@src/redux/redux-hooks';
import {DEFAULT_TAB_HEIGHT} from '@src/theme';

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
    height: DEFAULT_TAB_HEIGHT,
    position: 'absolute',
    left: 20,
    right: 20,
    bottom: 14,
    padding: 10,
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-between',
    flexDirection: 'row',
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
