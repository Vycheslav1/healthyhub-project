import { createSlice } from '@reduxjs/toolkit';
import { fetchCaloriesIntake } from './operations';

const initialState = {
  calories: {
    value: 0,
  },
  isLoading: false,
  error: null,
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handlePending = (state) => {
  state.isLoading = true;
};

const handleFulfildGet = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.calories.value = action.payload.data.value;
};

export const caloriesGoalSlice = createSlice({
  name: 'caloriesGoal',
  initialState,
  reducers: {
    clearDailyCalories(initialState) {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCaloriesIntake.fulfilled, handleFulfildGet)
      .addCase(fetchCaloriesIntake.pending, handlePending)
      .addCase(fetchCaloriesIntake.rejected, handleRejected);
  },
});

export const { clearDailyCalories } = caloriesGoalSlice.actions;
