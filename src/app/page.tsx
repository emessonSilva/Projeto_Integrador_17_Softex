'use client'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import { Input } from "@/components/input/input";
import { useState } from "react";
import Link from 'next/link';
import BarChart from '@/components/grafics/grafic1';
import MyAside from '@/components/aside/Myaside'

export default function Home() {

  // const [loginLogout, setLoginLogout] = useState<Boolean>(false)

  //funçao para mudar icone de login para logout
  // function changeLoginIcon() {
  //   setLoginLogout(!loginLogout)
  // }

  return (
    //aqui pode botar o height:'100vh'
    <body style={{ display: 'flex', height: '100vh', backgroundColor:"#010c15" }}>
      <MyAside />

      <main style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>

          <div style={{ padding: '20px', width: '600px', height: '400px' }}>
            <BarChart></BarChart>
          </div>

          <div style={{ backgroundColor: 'green', padding: '20px', width: '500px', height: '300px', color: 'white' }}>
            <h1>Gráfico 2</h1>
          </div>

          <div style={{ backgroundColor: 'orange', padding: '20px', width: '500px', height: '300px', color: 'white' }}>
            <h1>Gráfico 3</h1>
          </div>

          <div style={{ backgroundColor: 'purple', padding: '20px', width: '500px', height: '300px', color: 'white' }}>
            <h1>Gráfico 4</h1>
          </div>
        </div>
      </main>

    </body>

  )
}
