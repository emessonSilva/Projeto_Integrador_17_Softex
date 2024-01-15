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
    <main style={{ display: 'flex', backgroundColor: '#010C15' }}>
      <MyAside onFilterChange={handleFilterChange}/>

      <section style={{ padding:"10px" ,display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        {/* <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr'}}> */}

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'black', borderRadius: '10px', margin: '10px' }}>
            <LineChart filters={filters} />
          </div>

          <div style={{   color: 'white' ,display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'black', borderRadius: '10px', margin: '10px' }}>
            <BarChart filters={filters} />
          </div>

          <div style={{  color: 'white' ,display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'black', borderRadius: '10px', margin: '10px' }}>
          <PieChart />
          </div>

          <div style={{  color: 'black', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'black', borderRadius: '10px', margin: '10px'  }}>
          <HorizontalBar filters={filters}/>
            
          </div>
        {/* </div> */}
      </section>
    </main>
  );
}
