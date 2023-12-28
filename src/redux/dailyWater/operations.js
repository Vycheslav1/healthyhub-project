import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://healthy-hub-2d3x.onrender.com/api',
});

export const setAuthHeader = (token) => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const fetchWaterIntake = createAsyncThunk(
  'waterIntake/get',
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const persistToken = state.auth.token;
      if (!persistToken) {
        return thunkAPI.rejectWithValue('No token');
      }
      setAuthHeader(persistToken);
      const response = await instance('/user/water-intake');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addWaterIntake = createAsyncThunk(
  'waterIntake/post',
  async (credentials, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const persistToken = state.auth.token;
      if (!persistToken) {
        return thunkAPI.rejectWithValue('No token');
      }
      setAuthHeader(persistToken);
      const response = await instance.post(
        'api/user/water-intake',
        credentials
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
