import { createSlice } from '@reduxjs/toolkit';
import { fetchStatistics } from './operations';

const initialState = {
  statistics: null,
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
  state.statistics = action.payload.data;
};

export const statisticsSlice = createSlice({
  name: 'statistics',
  initialState,
  reducers: {
    clearStatistic(initialState) {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchStatistics.fulfilled, handleFulfildGet)
      .addCase(fetchStatistics.pending, handlePending)
      .addCase(fetchStatistics.rejected, handleRejected);
  },
});

export const { clearStatistic } = statisticsSlice.actions;
