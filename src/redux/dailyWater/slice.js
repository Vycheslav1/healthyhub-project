import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { addWaterIntake, fetchWaterIntake } from './operations';

const initialState = {
  water: {
    value: null,
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

const handleFulfild = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.water.value = action.payload.data.value;
};

export const waterIntakeSlice = createSlice({
  name: 'waterIntake',
  initialState,
  reducers: {
    clearWaterIntake(initialState) {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        isAnyOf(fetchWaterIntake.pending, addWaterIntake.pending),
        handlePending
      )
      .addMatcher(
        isAnyOf(fetchWaterIntake.rejected, addWaterIntake.rejected),
        handleRejected
      )
      .addMatcher(
        isAnyOf(fetchWaterIntake.fulfilled, addWaterIntake.fulfilled),
        handleFulfild
      );
  },
});

export const { clearWaterIntake } = waterIntakeSlice.actions;
