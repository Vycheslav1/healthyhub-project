import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

const ChartComponent = () => {
  const [selectedMonth, setSelectedMonth] = useState('current');
  const [caloriesData, setCaloriesData] = useState({});
  const [waterData, setWaterData] = useState({});
  const [weightData, setWeightData] = useState({});

  useEffect(() => {
    // Здесь потрібно отримати дані для графіків (caloriesData, waterData, weightData)
    // на основі вибраного місяця (selectedMonth).
    // Дані можна отримати, наприклад, із сервера чи локального сховища.

    const fetchData = async () => {
      const result = await getDataFromServer(selectedMonth);
      setCaloriesData(result.calories);
      setWaterData(result.water);
      setWeightData(result.weight);
    };

    fetchData();
  }, [selectedMonth]);

  const options = {
    scales: {
      x: [{ title: 'Days', type: 'linear', position: 'bottom' }],
      y: [{ title: 'Value', type: 'linear', position: 'left' }],
    },
  };

  return (
    <div className="container">
      <div>
        <label>
          Select Month:
          <select
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
          >
            <option value="current">Current Month</option>
            <option value="previous">Previous Month</option>
          </select>
        </label>
        <p>{`Month: ${selectedMonth}`}</p>
      </div>

      <div>
        <h2>Calories</h2>
        <p>{`Average value: 1700 calories`}</p>
        <Line data={caloriesData} options={options} />
      </div>

      <div>
        <h2>Water</h2>
        <p>{`Average value: 1700 ml`}</p>
        <Line data={waterData} options={options} />
      </div>

      <div>
        <h2>Weight</h2>
        <p>{`Average value: 68 kg`}</p>
        <Line data={weightData} options={options} />
      </div>
    </div>
  );
};

export default ChartComponent;
