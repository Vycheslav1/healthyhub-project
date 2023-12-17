import { Line } from 'react-chartjs-2';

const CaloriesChart = ({ averageValue, data, labels }) => {
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Calories',
        data: data,
        fill: false,
        borderColor: 'rgba(255, 99, 132, 1)',
        tension: 0.1,
      },
    ],
  };

  return (
    <div>
      <h2>Calories</h2>
      <p>{`Average value: ${averageValue}`}</p>
      <Line data={chartData} />
    </div>
  );
};

export default CaloriesChart;
