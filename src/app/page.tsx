'use client'

import MyAside from '@/components/aside/MyAside';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Input } from "@/components/input/input";
import Link from 'next/link';
import BarChart from '@/components/grafics/Bar';
import LineChart from '@/components/grafics/Line';
import PieChart from '@/components/grafics/Pie';
import HorizontalBar from '@/components/grafics/HorizontalBar';

export default function Home() {
  return (
    <main style={{ display: 'flex' }}>
      <MyAside />

      <section style={{ padding:"10px" ,display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        {/* <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr'}}> */}

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <LineChart />
          </div>

          <div style={{   color: 'white' ,display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <BarChart />
          </div>

          <div style={{  color: 'white' ,display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <PieChart />
          </div>

          <div style={{  color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <HorizontalBar/>
            
          </div>
        {/* </div> */}
      </section>
    </main>
  );
}
