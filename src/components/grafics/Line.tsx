
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
            text: 'Ganhos',
        },
    },
};

const labels = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

const data = {
    labels,
    datasets: [
        {
            label: 'Serviços',
            data: [1100, 500, 50, 1300, 850, 3700, 400, 2300, 100, 600, 300, 1500], // Dados fictícios
            backgroundColor: 'rgba(7, 247, 7, 0.9)',
        },

        {
            label: 'Produtos',
            data: [250, 900, 2250, 1300, 500, 2300, 800, 1300, 300, 750, 450, 2500], // Dados fictícios
            backgroundColor: 'rgba(15, 150, 240, 0.95)',
        },
    ],
};

const LineChart = () => {
    return <Line options={options} data={data} />;
};

export default LineChart;