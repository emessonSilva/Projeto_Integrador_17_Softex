import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';

Chart.register(CategoryScale, LinearScale, Title, Tooltip, Legend);

interface AulaData {
  Nome_Aula: string;
  Numero_Presencas: number;
}

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Número de Presenças dos Alunos em Cada Aula',
    },
  },
};

const PieChart = () => {
  const [data, setData] = useState({
    labels: [] as string[],
    datasets: [
      {
        label: 'Número de Presenças',
        data: [] as number[],
        backgroundColor: ['rgba(255, 99, 132, 0.5)', 'rgba(54, 162, 235, 0.5)', 'rgba(255, 206, 86, 0.5)', 'rgba(75, 192, 192, 0.5)'],
      },
    ],
  });

  useEffect(() => {
    // Fazer uma requisição AJAX para obter os dados do servidor
    fetch('chart.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then((dataFromServer: AulaData[]) => {
        const labels = dataFromServer.map(item => item.Nome_Aula);
        const datasets = [
          {
            label: 'Número de Presenças',
            data: dataFromServer.map(item => item.Numero_Presencas),
            backgroundColor: ['rgba(255, 99, 132, 0.5)', 'rgba(54, 162, 235, 0.5)', 'rgba(255, 206, 86, 0.5)', 'rgba(75, 192, 192, 0.5)'],
          },
        ];

        setData({ labels, datasets });
      })
      .catch(error => {
        console.error('Erro ao obter dados:', error);
      });
  }, []);

  return <Pie options={options} data={data} />;
};

export default PieChart;
