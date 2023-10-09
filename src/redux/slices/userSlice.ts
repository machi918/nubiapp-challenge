import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

type UserType = {
  value: number;
  email: string;
  name: string;
  lastName: string;
  token: string;
};

const initialState: UserType = {} as UserType;

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (_, action: PayloadAction<UserType>) => {
      return action.payload;
    },
    modifyUser: (state, action: PayloadAction<Partial<UserType>>) => {
      return {...state, ...action.payload};
    },
    resetUserState: () => initialState,
  },
});

export const {setUser, modifyUser, resetUserState} = userSlice.actions;

export default userSlice.reducer;
