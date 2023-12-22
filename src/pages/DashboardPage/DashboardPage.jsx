import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Chart from './Chart/Chart';
import DropdownSelect from '../DashboardPage/DropdownSelect/DropdownSelect';
import {
  Frame,
  GraphicsFrame,
  CaloriesFrame,
  WaterFrame,
} from './DashboardPage.styled';
import { fetchStatistics } from '../../redux/statistic/operation';
import {
  selectCaloriesData,
  selectWaterData,
  selectWeightData,
  selectMonthOptions,
} from '../../pages/DashboardPage/SelectorPage/SelectorPage';

export const DashboardPage = () => {
  const [data, setData] = useState({ value: 'lastMonth', label: 'Last Month' });

  const monthOptions = useSelector(selectMonthOptions);
  const caloriesData = useSelector((state) =>
    selectCaloriesData(state, data.value)
  );
  const waterData = useSelector(selectWaterData);
  const weightData = useSelector(selectWeightData);

  const dispatch = useDispatch();

  const onChange = (dat) => {
    setData(dat);
  };
  const handleMonthChange = (selectedMonth) => {
    console.log('Selected month:', selectedMonth);
    setData({ value: selectedMonth, label: selectedMonth });
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
          <CaloriesFrame
            className="CaloriesFrame"
            onChange={onChange}
            data={caloriesData}
          >
            <Chart
              chartType="Calories"
              data={caloriesData}
              period={data}
              labels={'Last Month'}
              averageValue={'lastMonth'}
            />
          </CaloriesFrame>
          <WaterFrame>
            <Chart
              chartType="Water"
              data={waterData}
              period={data}
              labels={'Last Month'}
              averageValue={'lastMonth'}
            />
          </WaterFrame>
        </GraphicsFrame>
        <Chart
          chartType="Weight"
          data={weightData}
          period={data}
          labels={'Last Month'}
          averageValue={'lastMonth'}
        />
      </Frame>
    </>
  );
};
