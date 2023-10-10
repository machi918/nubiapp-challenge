import {combineReducers, configureStore} from '@reduxjs/toolkit';

import {
  globalConfigurationSlice,
  navigationSlice,
  servicesSlice,
  userSlice,
} from './slices';

const rootReducer = combineReducers({
  user: userSlice,
  navigation: navigationSlice,
  services: servicesSlice,
  globalConfiguration: globalConfigurationSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
