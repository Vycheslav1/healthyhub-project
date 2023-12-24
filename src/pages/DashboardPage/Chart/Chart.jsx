import { Line } from 'react-chartjs-2';
import { useEffect, useRef } from 'react';
import { registerables, Chart } from 'chart.js';
import {
  ChartType,
  ChartWrapper,
  AverageText,
  Container,
  // ChartCanvas,
} from './Chart.styled';
Chart.register(...registerables);
import { useMemo } from 'react';
const options = {
  scales: {
    x: {
      grid: {
        color: 'rgba(255, 255, 255, 0.1)',
        borderWidth: 1,
      },
      ticks: {
        color: 'white',
      },
    },
    y: {
      grid: {
        color: 'rgba(255, 255, 255, 0.1)',
        borderWidth: 1,
      },
      ticks: {
        color: 'white',
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

const CustomChart = ({ chartType, averageValue, data, labels }) => {
  const chartData = useMemo(() => {
    return {
      labels: labels,
      datasets: [
        {
          label: chartType,
          data: data,
          fill: false,
        },
      ],
    };
  }, [chartType, averageValue, data, labels]);

  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.destroy();
    }
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, [chartData]);

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
