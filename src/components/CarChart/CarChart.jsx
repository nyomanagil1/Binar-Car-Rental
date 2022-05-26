import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import './carChart.css';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Innova', 'Jazz', 'Xenia', 'Fortuner', 'Pajero', 'BMW', 'Civic', 'CRV'],
  datasets: [
    {
      data: [12, 14, 12, 17, 20, 25, 30, 35],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(206, 104, 160, 0.2)',
        'rgba(231, 183, 255, 0.2)',
      ],
      borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)', 'rgba(206, 104, 160, 1)', 'rgba(231, 183, 255, 1)'],
      borderWidth: 1,
    },
  ],
  options: {
    maintainAspectRatio: true,
    responsive: true,
  },
};

export function CarChart() {
  return (
    <div className="car-chart">
      <Pie data={data} />;
    </div>
  );
}
