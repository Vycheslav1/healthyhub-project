import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Notiflix from 'notiflix';

// export const instance = axios.create({
//   baseURL: 'https://github.com/Alex1Go/back-healthy-hub',
// });

axios.defaults.baseURL = 'https://healthy-hub-2d3x.onrender.com/api';

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const delAuthHeader = () => {
  instance.defaults.headers.common.Authorization = '';
};

//signup
export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/auth/signup', credentials);
      Notiflix.Notify.success(`You have successfully registered!`);

      setAuthHeader(data.token);
      console.log(data);
      return data;
    } catch (error) {
      Notiflix.Notify.failure(`Sorry, there was an error, please try again.`);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
//signin
export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/auth/signin', credentials);
      Notiflix.Notify.success(`You have successfully logged in!`);

      setAuthHeader(data.token);
      console.log(data);
      return data;
    } catch (error) {
      Notiflix.Notify.failure(`Oops! The email or password is incorrect`);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//signout
export const logOut = createAsyncThunk('/auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/auth/signout');

    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logOutThunk = createAsyncThunk(
  'auth/logOut',
  async (_, thunkAPI) => {
    try {
      await instance.post('api/users/logout');
      delAuthHeader();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// PUT /api/user/goal
export const updateGoalThunk = createAsyncThunk(
  'auth/updateGoal',
  async (credentials, thunkAPI) => {
    try {
      const response = await instance.put('api/user/goal', credentials);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// PUT /api/user/weight
export const updateWeightThunk = createAsyncThunk(
  'auth/updateWeight',
  async (credentials, thunkAPI) => {
    try {
      const response = await instance.put('api/user/weight', credentials);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    console.log(persistedToken);

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    try {
      setAuthHeader(persistedToken);
      const { data } = await axios.get('/user/current');

      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//forgot-password
export const forgotPassword = createAsyncThunk(
  'auth/forgotPassword',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/auth/forgot-password', credentials);
      setAuthHeader(data.token);
      Notiflix.Notify.success(
        'The password has been successfully sent to your email!'
      );
      console.log(data);
      return data;
    } catch (error) {
      Notiflix.Notify.failure(`Sorry, there was an error, please try again.`);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateUser = createAsyncThunk(
  'user/update',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.put('/user/update', credentials);
      setHeadersToken(thunkAPI.getState().auth.token);
      // setAuthHeader(data.token);

      // Notiflix.Notify.success('Your data has been successfully updated!');

      console.log(data);
      return data;
    } catch (error) {
      // Notiflix.Notify.failure(`Sorry, there was an error, please try again!`);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
