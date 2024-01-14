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
import { useState } from 'react';

interface Filters {
  startDate: string;
  endDate: string;
  client: string;
  product: string;
  service: string;
}

export default function Home() {
  const [filters, setFilters] = useState({
    startDate:'',
    endDate:'',
    client:'',
    product:'',
    service:'',
  });

  const handleFilterChange = (newFilters: Filters) => {
    setFilters(newFilters);
  }; 


  return (
    <main style={{ display: 'flex' }}>
      <MyAside onFilterChange={handleFilterChange}/>

      <section style={{ padding:"10px" ,display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        {/* <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr'}}> */}

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <LineChart filters={filters} />
          </div>

          <div style={{   color: 'white' ,display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <BarChart filters={filters} />
          </div>

          <div style={{  color: 'white' ,display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <PieChart />
          </div>

          <div style={{  color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <HorizontalBar filters={filters}/>
            
          </div>
        {/* </div> */}
      </section>
    </main>
  );
}
