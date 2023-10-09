import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

type ServicesType = {
  id?: string;
  title: string;
  icon: string;
};

const initialState: ServicesType[] = [];

export const servcesSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {
    fillServices: (_, action: PayloadAction<ServicesType[]>) => {
      return action.payload;
    },
    addService: (state, action: PayloadAction<ServicesType>) => {
      return [...state, action.payload];
    },
    removeServiceByID: (state, action: PayloadAction<string>) => {
      return state.filter(error => error.id !== action.payload);
    },
    removeServiceByTitle: (state, action: PayloadAction<string>) => {
      return state.filter(error => error.title !== action.payload);
    },
    resetServicesState: () => initialState,
  },
});

export const {
  fillServices,
  addService,
  removeServiceByID,
  removeServiceByTitle,
  resetServicesState,
} = servcesSlice.actions;

export default servcesSlice.reducer;
