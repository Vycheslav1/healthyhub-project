import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://github.com/Alex1Go/back-healthy-hub',
});

export const setAuthHeader = (token) => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const fetchCaloriesIntake = createAsyncThunk(
  'caloriesGoal/get',
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const persistToken = state.auth.token;
      if (!persistToken) {
        return thunkAPI.rejectWithValue('No token');
      }
      setAuthHeader(persistToken);
      const response = await instance('api/user/daily-goal-calories');

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
