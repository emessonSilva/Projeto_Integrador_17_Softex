// import React, { useEffect, useState } from 'react';
// import { Bar } from 'react-chartjs-2';
// import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// interface AulaData {
//   Nome_Aula: string;
//   Numero_Presencas: number;
// }

// const options = {
//   responsive: true,
//   plugins: {
//     legend: {
//       position: 'top' as const,
//     },
//     title: {
//       display: true,
//       text: 'Número de Presenças dos Alunos em Cada Aula',
//     },
//   },
// };

// const BarChart = () => {
//   const [data, setData] = useState({
//     labels: [] as string[],
//     datasets: [
//       {
//         label: 'Número de Presenças',
//         data: [] as number[],
//         backgroundColor: ['green', 'blue', 'yellow'],
//         borderColor: 'rgb(255, 99, 132)',
//       },
//     ],
//   });

//   useEffect(() => {
//     // Fazer uma requisição AJAX para obter os dados do servidor
//     fetch('chart.php', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     })
//       .then(response => response.json())
//       .then((dataFromServer: AulaData[]) => {
//         const labels = dataFromServer.map(item => item.Nome_Aula);
//         const datasets = [
//           {
//             label: 'Número de Presenças',
//             data: dataFromServer.map(item => item.Numero_Presencas),
//             backgroundColor: ['green', 'blue', 'yellow'],
//             borderColor: 'rgb(255, 99, 132)',
//           },
//         ];

//         setData({ labels, datasets });
//       })
//       .catch(error => {
//         console.error('Erro ao obter dados:', error);
//       });
//   }, []);

//   return <Bar options={options} data={data} />;
// };

// export default BarChart;
