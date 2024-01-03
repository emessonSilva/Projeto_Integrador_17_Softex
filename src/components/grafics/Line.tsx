import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';

Chart.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

interface AulaData {
  Mes: number;
  Porcentagem: number;
}

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Porcentagem de Presença dos Alunos por Mês',
    },
  },
};

const LineChart = () => {
  const [data, setData] = useState({
    labels: [] as string[],
    datasets: [
      {
        label: 'Porcentagem de Presença',
        data: [] as number[],
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  });

  useEffect(() => {
    // Fazer uma requisição AJAX para obter os dados do servidor
    fetch('seuarquivo.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then((dataFromServer: AulaData[]) => {
        const labels = dataFromServer.map(item => `Mês ${item.Mes}`);
        const datasets = [
          {
            label: 'Porcentagem de Presença',
            data: dataFromServer.map(item => item.Porcentagem),
            borderColor: 'rgb(75, 192, 192)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
          },
        ];

        setData({ labels, datasets });
      })
      .catch(error => {
        console.error('Erro ao obter dados:', error);
      });
  }, []);

  return <Line options={options} data={data} />;
};

export default LineChart;
