import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

type GlobalConfigurationType = {
  isLoading: boolean;
};

const initialState: GlobalConfigurationType = {
  isLoading: true,
};

export const globalConfigurationSlice = createSlice({
  name: 'configuration',
  initialState,
  reducers: {
    setIsGlobalLoading: (state, action: PayloadAction<boolean>) => {
      return {...state, isLoading: action.payload};
    },
    resetConfigurationState: () => initialState,
  },
});

export const {setIsGlobalLoading, resetConfigurationState} =
  globalConfigurationSlice.actions;

export default globalConfigurationSlice.reducer;
