'use client'


import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend, BarElement } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Link from 'next/link';
import PieChart from '@/components/grafics/Pie';
import React, { ReactNode, useEffect, useState } from 'react';
import { api } from '../../services/api';
import { BTN } from '@/components/button/button';

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
interface student {
  months?: string;
  absences: number;
  attends: number
}

interface Company {
  students: student[]
}



export default function Home() {
  ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, BarElement, Title, Tooltip, Legend);

  const [datas, setDatas] = useState<Company[]>([]);
  const [startDate, setStartDate] = useState('janeiro');
  const [endDate, setEndDate] = useState('dezembro');
  const [labels, setLabels] = useState<string[] | undefined>(undefined);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('http://localhost:3001/companies');
        setDatas(response.data);

      } catch (error) {
        console.error('Erro ao obter dados do banco:', error);
      }
    };
    filtrarMeses()
    fetchData();
  }, [startDate, endDate]);

  const servicesData = datas.map(e => e.services.map(item => item.servicesValue)).flat();
  const productsData = datas.map(e => e.products.map(item => item.productsValue)).flat();
  const absencesData = datas.map(e => e.students.map(item => item.absences || 0)).flat();
  const attendsData = datas.map(e => e.students.map(item => item.attends || 0)).flat();
  const labelsInicial = datas.length > 0 ? datas[0].students.map(item => item.months || '') : [];


  const filtrarMeses = () => {
    const indiceInicial = labelsInicial.findIndex(mes => mes.toLowerCase() === startDate.toLowerCase());
    const indiceFinal = labelsInicial.findIndex(mes => mes.toLowerCase() === endDate.toLowerCase());

    if (indiceInicial !== -1 && indiceFinal !== -1) {
      setLabels(labelsInicial.slice(indiceInicial, indiceFinal + 1));
    } else {
      setLabels(['Intervalo de meses inválido']);
    }
  };

  const LineOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Alunos',
      },
    },
  };

  const LineData = {
    labels,
    datasets: [
      {
        label: 'Ausências',
        data: absencesData,
        backgroundColor: 'rgba(7, 247, 7, 0.9)',
      },
      {
        label: 'Presenças',
        data: attendsData,
        backgroundColor: 'rgba(15, 150, 240, 0.95)',
      },
    ],
  };

  const BarOptions = {
    responsive: true,
    plugins: {
      colors: {
        forceOverride: true,
        enabled: false
      },
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Vendas',
      },
    },
  };
  const BarData = {

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

  const horizontalBarData = {
    labels,
    datasets: [
      {
        indexAxis: "y",
        label: 'Ausências',
        data: absencesData,
        backgroundColor: 'rgba(7, 247, 7, 0.9)',
      },
      {
        indexAxis: "y",
        label: 'Presenças',
        data: attendsData,
        backgroundColor: 'rgba(15, 150, 240, 0.95)',
      },
    ],
  };
  const horizontalBarOptions = {

    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Alunos',
      },
    },

  };

  return (
    <main style={{ height: "100vh", padding: "5px", display: "flex", backgroundColor: "#cfcdcd" }}>
      <aside >
        <div className="company-info">
          <img className="company-logo" alt="Logo" />
          <p className="company-name">{ }</p>
        </div>
        <div className="profile-link">
          <p title="Perfil" className="profile-icon">
            <a href="/profile"><i className="bi bi-person-circle"></i></a>
          </p>
        </div>
        <div className="filters">
          <p className="filter-title">Filtros</p>
          <label htmlFor="startDate">Data Início</label>
          <label htmlFor="filtroInicial">Mês Inicial: </label>
          <input
            type="text"
            id="startDate"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
          <label htmlFor="endDate">Data Fim</label>
          <input
            type="text"
            id="endDate"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
          <BTN borderRadius={10} color="white" backgroundColor="#0F4EF0" type="button" name="Aplicar Filtros" width="150px" height="50px" onClick={filtrarMeses}></BTN>
        </div>
        <div className="logout">
          <p title="Logout" className="logout-icon">
            <a href="/login"><i className="bi bi-box-arrow-in-right"></i></a>
          </p>
          <div className="info">
            <p title="Informações sobre Kósmos Tecnologia" className="info-icon">
              <i className="bi bi-info-circle"></i>
            </p>
          </div>
        </div>
      </aside>
      <section style={{ padding: "20px", gap: "15px", display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'center', justifyContent: 'center', flex: 1 }}>


        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Line options={LineOptions} data={LineData} />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Bar options={horizontalBarOptions} data={horizontalBarData} />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifySelf: 'center' }}>
          <PieChart />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Bar options={BarOptions} data={BarData} />

        </div>


      </section>
    </main>
  );
}
