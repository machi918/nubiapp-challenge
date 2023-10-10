import {combineReducers, configureStore} from '@reduxjs/toolkit';

import {
  errorsSlice,
  globalConfigurationSlice,
  navigationSlice,
  servicesSlice,
  userSlice,
} from './slices';

const rootReducer = combineReducers({
  user: userSlice,
  navigation: navigationSlice,
  services: servicesSlice,
  errors: errorsSlice,
  globalConfiguration: globalConfigurationSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
