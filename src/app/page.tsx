'use client'

import MyAside from '@/components/aside/MyAside';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Input } from "@/components/input/input";
import Link from 'next/link';
import BarChart from '@/components/grafics/Bar';
import LineChart from '@/components/grafics/Line';
import PieChart from '@/components/grafics/Pie';

export default function Home() {
  return (
    <main style={{ display: 'flex', height: '100vh' }}>
      <MyAside />

      <section style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          <div style={{ width: '600px', height: '400px' }}>
            <BarChart />
          </div>

          <div style={{ backgroundColor: 'blue', padding: '20px', width: '600px', height: '400px', color: 'white' }}>
            <h1>Gráfico 2</h1>
          </div>

          <div style={{ width: '600px', height: '400px', color: 'white' }}>
            <LineChart />
          </div>

          <div style={{ width: '600px', height: '400px', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

            <PieChart />
          </div>
        </div>
      </section>
    </main>
  );
}
