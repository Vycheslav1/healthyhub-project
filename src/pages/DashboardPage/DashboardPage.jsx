import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Chart from './Chart/Chart';
import DropdownSelect from '../DashboardPage/DropdownSelect/DropdownSelect';
import { WeightChart } from './WeightChart/WeightChart';
import {
  Frame,
  GraphicsFrame,
  CaloriesFrame,
  WaterFrame,
} from './DashboardPage.styled';
import { fetchStatistics } from '../../redux/statistic/operations';
import {
  selectCaloriesData,
  selectWaterData,
  selectWeightData,
  selectMonthOptions,
} from '../../pages/DashboardPage/SelectorPage/SelectorPage';

export const DashboardPage = () => {
  const [date, setDate] = useState({ value: 'lastMonth', label: 'Last Month' });
  const [datesOfMonth, setDatesOfMonth] = useState();
  const monthOptions = useSelector(selectMonthOptions);
  const caloriesData = useSelector((state) =>
    selectCaloriesData(state, date.value)
  );
  const waterData = useSelector(selectWaterData);
  const weightData = useSelector(selectWeightData);
  const dispatch = useDispatch();

  const handleMonthChange = (selectedMonth) => {
    console.log('Selected month:', selectedMonth);
    setDate({ value: selectedMonth, label: selectedMonth });
    const days = new Date(new Date().getFullYear(), selectedMonth, 0).getDate();
    setDatesOfMonth(days);
  };

  useEffect(() => {
    if (
      !caloriesData ||
      !waterData ||
      !weightData ||
      !caloriesData.length ||
      !waterData.length ||
      !weightData.length
    ) {
      dispatch(fetchStatistics());
    }
  }, [dispatch, caloriesData, waterData, weightData]);

  return (
    <>
      <Frame className="Frame">
        <DropdownSelect options={monthOptions} onChange={handleMonthChange} />
        <GraphicsFrame className="GraphicsFrame">
          <CaloriesFrame className="CaloriesFrame">
            <Chart
              chartType="Calories"
              data={caloriesData}
              period={datesOfMonth}
              labels={'Last Month'}
              averageValue={'1700 cal'}
            />
          </CaloriesFrame>
          <WaterFrame className="WaterFrame">
            <Chart
              chartType="Water"
              data={waterData}
              period={datesOfMonth}
              labels={'Last Month'}
              averageValue={'1700 ml'}
            />
          </WaterFrame>
        </GraphicsFrame>
        <WeightChart data={weightData} period={datesOfMonth} />
      </Frame>
    </>
  );
};
