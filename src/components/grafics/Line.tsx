
import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';
import { api } from '../../../services/api';



export default function LineChart() {

    ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

    const [datas, setDatas] = useState<any[]>([]);

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

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get('http://localhost:3001/empresas');
                setDatas(response.data);
            } catch (error) {
                console.error('Erro ao obter dados do banco:', error);
            }
        };

        fetchData();
    }, []);


    const data = {
        labels,
        datasets: [
            {
                label: 'Serviços',
                data: datas.map(item => item.servicos).flat(),
                backgroundColor: 'rgba(7, 247, 7, 0.9)',
            },
            {
                label: 'Produtos',
                data: datas.map(item => item.produtos).flat(),
                backgroundColor: 'rgba(15, 150, 240, 0.95)',
            },
        ],
    };

    return <Line options={options} data={data} />;
};

