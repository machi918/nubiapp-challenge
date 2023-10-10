import {FC, useCallback} from 'react';
import {FlatList, ListRenderItem, StyleSheet, View} from 'react-native';

import {useTheme} from '@react-navigation/native';

import {
  Header,
  MOVEMENT_ITEM_HEIGHT,
  MovementItem,
  ScreenView,
} from '@src/components';
import {useAppSelector} from '@src/redux/redux-hooks';
import {DEFAULT_H_PADDING, DEFAULT_TAB_HEIGHT} from '@src/theme';
import {UserMovement} from '@src/types';

export const MovementsScreen: FC = () => {
  const userState = useAppSelector(state => state.user);
  const {colors} = useTheme();

  const renderItem: ListRenderItem<UserMovement> = useCallback(
    ({item}) => (
      <MovementItem
        key={item.date}
        {...item}
        amount={item['amount '] ?? item?.amount}
      />
    ),
    [],
  );

  const footerDummyItem: ListRenderItem<unknown> = useCallback(
    () => <View style={styles.footer} />,
    [],
  );

  return (
    <ScreenView
      style={styles.container}
      alignItems="center"
      bgColor={colors.card}>
      <Header title="Movimientos" />
      <FlatList
        style={styles.flatlist}
        data={userState?.movements ?? []}
        renderItem={renderItem}
        ListFooterComponent={footerDummyItem}
        // Optimizations
        initialNumToRender={20}
        maxToRenderPerBatch={20}
        windowSize={41}
        removeClippedSubviews={true}
        getItemLayout={(_data, index) => ({
          length: MOVEMENT_ITEM_HEIGHT, // Height of MovementItem
          offset: MOVEMENT_ITEM_HEIGHT * index,
          index,
        })}
      />
    </ScreenView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 100,
    paddingHorizontal: DEFAULT_H_PADDING,
  },
  flatlist: {
    width: '100%',
  },
  footer: {
    height: DEFAULT_TAB_HEIGHT + 20,
  },
});
