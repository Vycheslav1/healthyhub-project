import { createSlice } from '@reduxjs/toolkit';
import {
  fetchFoodIntake,
  postFoodIntake,
  updateFoodIntake,
} from './operations';

const initialState = {
  food: { breakfast: [], lunch: [], dinner: [], snack: [] },
  totalCalories: 0,
  isLoading: false,
  error: null,
  firstLoad: false,
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
  state.firstLoad = true;

  const breakfast = action.payload.data.userProducts.breakfast;
  const dinner = action.payload.data.userProducts.dinner;
  const snack = action.payload.data.userProducts.snack;
  const lunch = action.payload.data.userProducts.lunch;

  state.food = { breakfast, dinner, snack, lunch };
  state.totalCalories = action.payload.data.userProducts.totalCalories;
};

const handleFulfildPost = (state, action) => {
  state.isLoading = false;
  state.error = null;
  const type = action.payload.data.type;
  state.food[type] = [...action.payload.data.product];
  state.totalCalories = action.payload.data.totalCalories;
};

const handleFulfildUpdate = (state, action) => {
  state.isLoading = false;
  state.error = null;
  // {dinner:{name:', id} }
  const type = action.payload.data.type;
  const indexOfFood = state.food[type].findIndex(
    (item) => item.ident === action.payload.data.product.ident
  );
  state.food[type][indexOfFood] = action.payload.data.product;
  state.totalCalories = action.payload.data.totalCalories;
};

export const foodIntakeSlice = createSlice({
  name: 'foodIntake',
  initialState,
  reducers: {
    clearDiary(initialState) {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFoodIntake.fulfilled, handleFulfildGet)
      .addCase(fetchFoodIntake.pending, handlePending)
      .addCase(fetchFoodIntake.rejected, handleRejected)
      .addCase(postFoodIntake.fulfilled, handleFulfildPost)
      .addCase(postFoodIntake.pending, handlePending)
      .addCase(postFoodIntake.rejected, handleRejected)
      .addCase(updateFoodIntake.fulfilled, handleFulfildUpdate)
      .addCase(updateFoodIntake.pending, handlePending)
      .addCase(updateFoodIntake.rejected, handleRejected);
  },
});

export const { clearDiary } = foodIntakeSlice.actions;
