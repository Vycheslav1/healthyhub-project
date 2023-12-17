import { Line } from 'react-chartjs-2';

const WeightChart = ({ averageValue, data, labels }) => {
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Weight',
        data: data,
        fill: false,
        borderColor: 'rgba(255, 99, 132, 1)',
        tension: 0.1,
      },
    ],
  };

  return (
    <div>
      <h2>Weight</h2>
      <p>{`Average value: ${averageValue}`}</p>
      <Line data={chartData} />
    </div>
  );
};

export default WeightChart;
