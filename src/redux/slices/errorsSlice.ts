import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

type ErrorType = {
  id: string;
  name: string;
  message: string;
};

const initialState: ErrorType[] = [];

export const errorsSlice = createSlice({
  name: 'errors',
  initialState,
  reducers: {
    addError: (state, action: PayloadAction<ErrorType>) => {
      return [...state, action.payload];
    },
    removeErrorByID: (state, action: PayloadAction<string>) => {
      return state.filter(error => error.id !== action.payload);
    },
    resetErrorsState: () => initialState,
  },
});

export const {addError, removeErrorByID, resetErrorsState} =
  errorsSlice.actions;

export default errorsSlice.reducer;
