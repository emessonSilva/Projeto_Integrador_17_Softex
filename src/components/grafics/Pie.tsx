import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, ArcElement, PieController, Title, Tooltip, Legend } from 'chart.js';
import { api } from '../../../services/api';



export default function PieChart() {

    ChartJS.register(CategoryScale, LinearScale, ArcElement, PieController, Title, Tooltip, Legend);

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

    const totalServices = datas.map(item => item.servicos.reduce((total: number, numero: number) => total + numero, 0))
    const totalProducts = datas.map(item => item.produtos.reduce((total: number, numero: number) => total + numero, 0))

    const data = {
        labels: [
            'Serviços',
            'Produtos',
        ],

        datasets: [{
            label: 'Ganhos',
            data: [totalServices, totalProducts],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
            ],
            hoverOffset: 4
        }]
    };
    return <Pie data={data} />;
};