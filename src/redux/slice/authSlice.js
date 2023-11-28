/* eslint-disable prettier/prettier */
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {name: '', email: '', age: '', gender: ''},
    clientRole: '',
    token: '',
    danceReq: '',
    songReq: '',
    songPayment: false,
    dancePayment: false,
  },
  reducers: {
    setUser: (state, {payload}) => {
      state.user = payload;
    },
    setToken: (state, {payload}) => {
      state.token = payload;
    },
    setClientRole: (state, {payload}) => {
      state.clientRole = payload;
    },
    setDanceReq: (state, {payload}) => {
      state.danceReq = payload;
    },
    setSongReq: (state, {payload}) => {
      state.songReq = payload;
    },
    setSongPayment: (state, {payload}) => {
      state.songPayment = payload;
    },
    setDancePayment: (state, {payload}) => {
      state.dancePayment = payload;
    },
  },
});

export const {
  setUser,
  setToken,
  setClientRole,
  setDanceReq,
  setSongReq,
  setDancePayment,
  setSongPayment,
} = authSlice.actions;
export default authSlice.reducer;
