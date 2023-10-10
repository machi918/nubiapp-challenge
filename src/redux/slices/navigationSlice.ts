import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

const initialState: string[] = [];

export const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    fillNavigationRoutes: (_, action: PayloadAction<string[]>) => {
      return action.payload;
    },
    addRoute: (state, action: PayloadAction<string>) => {
      return [...state, action.payload];
    },
    removeRouteByName: (state, action: PayloadAction<string>) => {
      return state.filter(error => error !== action.payload);
    },
    resetNavigationState: () => initialState,
  },
});

export const {
  fillNavigationRoutes,
  addRoute,
  removeRouteByName,
  resetNavigationState,
} = navigationSlice.actions;

export default navigationSlice.reducer;
