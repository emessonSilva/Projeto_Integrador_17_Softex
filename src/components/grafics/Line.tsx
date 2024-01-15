
import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';
import { api } from '../../../services/api';

// interface Company {
//     services: { months: string[]; servicesValue: number[] };
//     products: { months: string[]; productsValue: number[] };
// }

interface Product {
    months: string;
    productsValue: number;
}

interface Service {
    months: string;
    servicesValue: number;
}

interface Company {
    nomeEmpresa: string;
    products: Product[];
    services: Service[];
}
  
interface LineChartProps {
    filters: {
        startDate: string;
        endDate: string;
        client: string;
        product: string;
        service: string;
    }
}


const LineChart: React.FC<LineChartProps> = ({ filters }) => {
    ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

    const [datas, setDatas] = useState<Company[]>([]);

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
                labels: {
                    color: 'white',
                }
            },
            title: {
                display: true,
                text: 'Ganhos',
                color: 'white',
            },
        },
        scales: {
            x: {
                ticks: {
                    color: 'white', 
                },
            },
            y: {
                ticks: {
                    color: 'white',
                    padding: 20, 
                },
            },
        },   
    };



    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get('http://localhost:3001/companies');
                setDatas(response.data);
                console.log(datas)
            } catch (error) {
                console.error('Erro ao obter dados do banco:', error);
            }
        };

        fetchData();
    }, [filters]);

    const labels = datas.length > 0 ? datas[0].services.map(item => item.months) : [];
    const servicesData = datas.map(e => e.services.map(item => item.servicesValue)).flat();
    const productsData = datas.map(e => e.products.map(item => item.productsValue)).flat();

    console.log(servicesData)
    const data = {
        labels,
        datasets: [
            {
                label: 'Serviços',
                data: servicesData,
                backgroundColor: 'rgba(7, 247, 7, 0.9)',
            },
            {
                label: 'Produtos',
                data: productsData,
                backgroundColor: 'rgba(15, 150, 240, 0.95)',
            },
        ],
    };

    return <Line options={options} data={data} />;
};

export default LineChart
