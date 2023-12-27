import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://healthy-hub-2d3x.onrender.com/api';

export function setHeadersToken(token) {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}

export const fetchGoals = createAsyncThunk(
  'user/statistics',
  async (_, thunkAPI) => {
    try {
      setHeadersToken(thunkAPI.getState().auth.token);

      const response = await axios.get('/user/statistics');

      console.log(response.data);

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addWater = createAsyncThunk(
  'user/water-intake',
  async (quantity, thunkAPI) => {
    try {
      setHeadersToken(thunkAPI.getState().auth.token);

      const { data } = await axios.post('/user/water-intake', {
        water: quantity,
      });
      console.log(quantity);
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
      const { data } = await axios.post('/user/food-intake', {
        products: body,
        type: body,
      });
      console.log(body);
      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
