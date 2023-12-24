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
      const response = await axios.post('/user/water-intake', {
        water: quantity,
      });

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);