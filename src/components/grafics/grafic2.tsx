

import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'Chart.js Line Chart',
        },
    },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: [500, 700, 300, 200, 800, 400, 600], // Dados fictícios
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'Dataset 2',
            data: [300, 400, 200, 100, 600, 300, 500], // Dados fictícios
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
};

const BarChart = () => {
    return <Line options={options} data={data} />;
};

export default BarChart;
