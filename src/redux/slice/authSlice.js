/* eslint-disable prettier/prettier */
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {name: '', email: '', age: '', gender: ''},
    token: '',
  },
  reducers: {
    setUser: (state, {payload}) => {
      state.user = payload;
    },
    setToken: (state, {payload}) => {
      state.token = payload;
    },
  },
});

export const {setUser} = authSlice.actions;
export default authSlice.reducer;
