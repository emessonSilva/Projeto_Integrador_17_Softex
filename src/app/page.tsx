'use client'

import MyAside from '@/components/aside/MyAside'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Input } from "@/components/input/input";
import Link from 'next/link';
import BarChart from '@/components/grafics/Bar';
import LineChart from '@/components/grafics/Line';

export default function Home() {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <MyAside />

      <main style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          <div style={{ padding: '20px', width: '600px', height: '400px' }}>
            <BarChart />
          </div>

          <div style={{ backgroundColor: 'blue', padding: '20px', width: '600px', height: '400px', color: 'white' }}>
            <h1>Gráfico 2</h1>
          </div>

          <div style={{ padding: '20px', width: '600px', height: '400px', color: 'white' }}>
            <LineChart />
          </div>

          <div style={{ backgroundColor: 'purple', padding: '20px', width: '600px', height: '400px', color: 'white' }}>
            <h1>Gráfico 4</h1>
          </div>
        </div>
      </main>
    </div>
  );
}
