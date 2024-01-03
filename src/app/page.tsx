'use client'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import { Input } from "@/components/input/input";
import { useState } from "react";
import Link from 'next/link';
import BarChart from '@/components/grafics/grafic1';
import LineChart from '@/components/grafics/grafic2';

export default function Home() {


  // const [loginLogout, setLoginLogout] = useState<Boolean>(false)

  //funçao para mudar icone de login para logout
  // function changeLoginIcon() {
  //   setLoginLogout(!loginLogout)
  // }

  return (
    //aqui pode botar o height:'100vh'
    <body style={{ display: 'flex', height: '' }}>

      <aside style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
        <img style={{ background: 'black', width: '80px', height: '80px', borderRadius: '100%' }} /><p>nome da empresa logada</p>
        <p title='Perfil' style={{ fontSize: '2.5rem' }}> <Link style={{ color: 'black' }} href="../profile"><i className="bi bi-person-circle" ></i></Link></p>
        <p style={{ fontStyle: 'strong', fontSize: '1.5rem' }}>Filtros</p>
        <label htmlFor="">Data ínicio</label><Input height="30px" type='date'></Input>
        <label htmlFor="">Data Fim</label><Input height="30px" type='date'></Input>
        <label htmlFor="">Cliente</label><Input height="30px"></Input>
        <label htmlFor="">Produto</label><Input height="30px"></Input>
        <label htmlFor="">Serviço</label><Input height="30px"></Input>
        <p title='Logout' style={{ fontSize: '2.5rem' }}><Link style={{ color: 'black' }} href="../login"><i className="bi bi-box-arrow-in-right"></i></Link></p>
        <p title='Informações sobre Kósmos Tecnologia' style={{ fontSize: '2.5rem' }}><i className="bi bi-info-circle"></i></p>
      </aside>

      <main style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>

          <div style={{ padding: '20px', width: '600px', height: '400px' }}>
            <BarChart></BarChart>
          </div>

          <div style={{ backgroundColor: 'green', padding: '20px', width: '500px', height: '300px', color: 'white' }}>
            <h1>Gráfico 2</h1>
          </div>

          <div style={{ padding: '20px', width: '600px', height: '400px', color: 'white' }}>
            <LineChart />
          </div>

          <div style={{ backgroundColor: 'purple', padding: '20px', width: '500px', height: '300px', color: 'white' }}>
            <h1>Gráfico 4</h1>
          </div>
        </div>
      </main>

    </body>

  )
}
