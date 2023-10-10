import {FC, useCallback} from 'react';
import {FlatList, ListRenderItem, StyleSheet, View} from 'react-native';

import {Header, MovementItem} from '@src/components';
import {useAppSelector} from '@src/redux/redux-hooks';
import {UserMovement} from '@src/types';

export const MovementsScreen: FC = () => {
  const userState = useAppSelector(state => state.user);

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
    <View style={styles.container}>
      <Header />
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 100,
    paddingHorizontal: 20,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  flatlist: {
    width: '100%',
  },
});
