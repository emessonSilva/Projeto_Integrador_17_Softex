import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, PieController, Title, Tooltip, Legend } from 'chart.js';
import { api } from '../../../services/api';



export default function PieChart() {

    ChartJS.register(ArcElement, PieController, Title, Tooltip, Legend);

    const [datas, setDatas] = useState<any[]>([]);

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
                labels: {
                    color: 'white',
                },
            },
            title: {
                display: true,
                text: 'Vendas',
                color: 'white',
            },
        },
        
    };



    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get('http://localhost:3001/companies');
                setDatas(response.data);
            } catch (error) {
                console.error('Erro ao obter dados do banco:', error);
            }
        };

        fetchData();
    }, []);

    const totalServices = datas.map(item => item.services.map((e: any) => e.servicesValue).reduce((total: number, numero: number) => total + numero, 0))
    const totalProducts = datas.map(item => item.products.map((e: any) => e.productsValue).reduce((total: number, numero: number) => total + numero, 0))

    const data = {
        labels: [
            'Serviços',
            'Produtos',
        ],

        datasets: [{
            label: 'Ganhos',
            data: [totalServices, totalProducts],
            backgroundColor: [
                'rgba(7, 247, 7, 0.9)',
                'rgb(54, 162, 235)',
            ],
            hoverOffset: 4
        }]
    };
    return <Pie data={data} options={options} width="450px" height="100px" min-width="200px" min-height="100px" />;
};