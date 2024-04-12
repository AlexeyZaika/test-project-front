import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from './axios';

export const fetchLoginUser = createAsyncThunk(
  'auth/fetchLoginUser',
  async (params, { rejectWithValue }) => {
    const { data } = await axios.post('/auth/login', params);

    if (!data) {
      return rejectWithValue('Server error');
    }

    return data;
  }
);

export const fetchRegisterUser = createAsyncThunk(
  'auth/fetchRegisterUser',
  async (params, { rejectWithValue }) => {
    const { data } = await axios.post('/auth/register', params);

    if (!data) {
      return rejectWithValue('Server error');
    }

    return data;
  }
);

export const fetchAuthMe = createAsyncThunk(
  'auth/fetchAuthMe',
  async (_, { rejectWithValue }) => {
    const { data } = await axios.get('/auth/me');

    if (!data) {
      return rejectWithValue('Server error');
    }

    return data;
  }
);
