import { createSelector } from 'reselect';

export const selectCaloriesData = (state) => state.statistics?.calories;
export const selectWaterData = (state) => state.statistics?.water;
export const selectWeightData = (state) => state.statistics?.weight;

export const selectMonthOptions = createSelector(
  [selectCaloriesData],
  (caloriesData) => {
    if (caloriesData) {
      const uniqueMonths = [...new Set(caloriesData.map((item) => item.month))];
      return uniqueMonths.map((month) => ({ value: month, label: month }));
    }
    return [];
  }
);

const SelectorPage = createSelector(
  [selectCaloriesData, selectWaterData, selectWeightData],
  (caloriesData, waterData, weightData) => ({
    caloriesData,
    waterData,
    weightData,
  })
);

export default SelectorPage;
