import { createSlice } from '@reduxjs/toolkit';

import { fetchAuthMe, fetchLoginUser, fetchRegisterUser } from '@/http/auth.js';

const initialState = {
  user: null,
  loading: false,
  error: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchLoginUser.pending, ( state) => {
          state.loading = true;
          state.error = false;
        },
      )
      .addCase(
        fetchLoginUser.fulfilled, ( state, action) => {
          state.loading = false;
          state.user = action.payload;
        },
      )
      .addCase(
        fetchLoginUser.rejected, ( state) => {
          state.loading = false;
          state.error = true;
        },
      )
      .addCase(
        fetchAuthMe.pending, ( state) => {
          state.loading = true;
          state.error = false;
        },
      )
      .addCase(
        fetchAuthMe.fulfilled, ( state, action) => {
          state.loading = false;
          state.user = action.payload;
        },
      )
      .addCase(
        fetchAuthMe.rejected, ( state) => {
          state.loading = false;
          state.error = true;
        },
      )
      .addCase(
        fetchRegisterUser.pending, ( state) => {
          state.loading = true;
          state.error = false;
        },
      )
      .addCase(
        fetchRegisterUser.fulfilled, ( state, action) => {
          state.loading = false;
          state.user = action.payload;
        },
      )
      .addCase(
        fetchRegisterUser.rejected, ( state) => {
          state.loading = false;
          state.error = true;
        },
      )
  },
});

export const selectIsAuth = (state) => Boolean(state.auth.user);
export const userData = (state) => state.auth.user;

export const authReducer = authSlice.reducer;

export const { logout } = authSlice.actions;
