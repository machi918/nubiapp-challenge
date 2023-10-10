import {FC, useCallback} from 'react';
import {FlatList, ListRenderItem, StyleSheet} from 'react-native';

import {useTheme} from '@react-navigation/native';

import {Header, MovementItem, ScreenView} from '@src/components';
import {useAppSelector} from '@src/redux/redux-hooks';
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
        // Optimizations
        initialNumToRender={20}
        maxToRenderPerBatch={20}
        windowSize={41}
        removeClippedSubviews={true}
        getItemLayout={(_data, index) => ({
          length: 60, // Height of MovementItem
          offset: 60 * index,
          index,
        })}
      />
    </ScreenView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 100,
    paddingHorizontal: 20,
  },
  flatlist: {
    width: '100%',
  },
});
