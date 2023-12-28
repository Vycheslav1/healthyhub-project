import { AverageText, ChartType } from '../Chart/Chart.styled';
import {
  Date,
  Weight,
  WeightConteanir,
  WeightItem,
} from './WeightChart.styled';

export const WeightChart = ({
  data = {
    average: 68,
    weights: Array.from(
      { length: 31 },
      () => Math.floor(Math.random() * (70 - 65 + 1)) + 65
    ),
  },
}) => {
  return (
    <div>
      <Weight>
        <ChartType>Weight</ChartType>
        <AverageText>Average value: {data?.average} kg</AverageText>
      </Weight>
      <WeightConteanir>
        {data.weights.map((item, index) => (
          <div key={index}>
            <WeightItem>{item}</WeightItem>
            <Date>{++index}</Date>
          </div>
        ))}
      </WeightConteanir>
    </div>
  );
};
