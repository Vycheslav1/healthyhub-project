import { Line } from 'react-chartjs-2';
import { useEffect, useRef } from 'react';
import { registerables, Chart } from 'chart.js';
Chart.register(...registerables);
import { useMemo } from 'react';
const CustomChart = ({ chartType, averageValue, data, labels }) => {
  const chartData = useMemo(() => {
    return {
      labels: labels,
      datasets: [
        {
          label: chartType,
          data: data,
          fill: false,
          borderColor: 'rgba(255, 99, 132, 1)',
          tension: 0.1,
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
    <div>
      <h2>{chartType}</h2>
      <p>{`Average value: ${averageValue}`}</p>
      <Line ref={chartRef} data={chartData} />
    </div>
  );
};

export default CustomChart;
