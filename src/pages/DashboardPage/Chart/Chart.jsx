import { Line } from 'react-chartjs-2';
import { useRef } from 'react';
import { registerables, Chart } from 'chart.js';
import {
  ChartType,
  ChartWrapper,
  AverageText,
  Container,
} from './Chart.styled';
Chart.register(...registerables);
import { useMemo } from 'react';
const options = {
  scales: {
    x: {
      type: 'category',

      grid: {
        color: 'rgba(255, 255, 255, 0.1)',
        borderWidth: 1,
      },
      ticks: {
        color: 'white',
      },
    },
    y: {
      min: 0,
      max: 3,
      grid: {
        color: 'rgba(255, 255, 255, 0.1)',
        borderWidth: 1,
      },
      ticks: {
        color: 'white',
        stepSize: 1,
        callback: function (value) {
          return value === 0 ? '0' : value + 'K';
        },
      },
    },
  },
  plugins: {
    legend: {
      display: true,
      labels: {
        color: 'white',
      },
    },
  },
};

const CustomChart = ({ chartType, averageValue, data, period }) => {
  const chartData = useMemo(() => {
    return {
      labels: Array.from({ length: period }, (_, index) => index + 1),
      datasets: [
        {
          label: chartType,
          data: data,
          fill: false,
        },
      ],
    };
  }, [chartType, averageValue, data, period]);

  const chartRef = useRef(null);
  return (
    <ChartWrapper>
      <Container>
        <ChartType>{chartType}</ChartType>
        <AverageText>{`Average value: ${averageValue}`}</AverageText>
      </Container>
      <Line ref={chartRef} data={chartData} options={options} />
    </ChartWrapper>
  );
};

export default CustomChart;
