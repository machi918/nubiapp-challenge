import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

type NavigationType = {
  id?: string;
  route: string;
  icon: string;
};

const initialState: NavigationType[] = [];

export const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    fillNavigationRoutes: (_, action: PayloadAction<NavigationType[]>) => {
      return action.payload;
    },
    addRoute: (state, action: PayloadAction<NavigationType>) => {
      return [...state, action.payload];
    },
    removeRouteByID: (state, action: PayloadAction<string>) => {
      return state.filter(error => error.id !== action.payload);
    },
    removeRouteByName: (state, action: PayloadAction<string>) => {
      return state.filter(error => error.route !== action.payload);
    },
    resetServicesState: () => initialState,
  },
});

export const {
  fillNavigationRoutes,
  addRoute,
  removeRouteByID,
  removeRouteByName,
  resetServicesState,
} = navigationSlice.actions;

export default navigationSlice.reducer;
