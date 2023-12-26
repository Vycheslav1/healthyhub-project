import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://healthy-hub-2d3x.onrender.com/api';

export function setHeadersToken(token) {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}

export const addWater = createAsyncThunk(
  'user/water-intake',
  async (quantity, thunkAPI) => {
    try {
      setHeadersToken(thunkAPI.getState().auth.token);
      const { data } = await axios.post('/user/water-intake', {
        water: quantity,
      });

      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchGoalsConfirm = createAsyncThunk(
  'user/food-intake',
  async (body, thunkAPI) => {
    try {
      setHeadersToken(thunkAPI.getState().auth.token);
      const { data } = await axios.post('/user/food-intake');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const fetchGoals = createAsyncThunk(
  'user/food-intake',
  async (body, thunkAPI) => {
    try {
      setHeadersToken(thunkAPI.getState().auth.token);
      const { data } = await axios.post('/user/food-intake');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
