'use client'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import { Input } from "@/components/input/input";
import { useState } from "react";
import Link from 'next/link';

export default function Home() {

  // const [loginLogout, setLoginLogout] = useState<Boolean>(false)

  //funçao para mudar icone de login para logout
  // function changeLoginIcon() {
  //   setLoginLogout(!loginLogout)
  // }

  return (
    <main style={{ display: 'flex' }}>

      <aside style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px' }}>

        <img style={{ background: 'black', width: '150px', height: '150px', borderRadius: '50%' }} /><p>nome da empresa logada</p>
        <p title='Perfil' style={{ fontSize: '2.5rem' }}> <Link style={{ color: 'black' }} href="../profile"><i className="bi bi-person-circle" ></i></Link></p>
        <p style={{ fontStyle: 'strong', fontSize: '1.5rem' }}>Filtros</p>
        <label htmlFor="">data</label><Input height="30px"></Input>
        <label htmlFor="">cliente</label><Input height="30px"></Input>
        <label htmlFor="">produtos</label><Input height="30px"></Input>
        <label htmlFor="">serviços</label><Input height="30px"></Input>
        <p title='Login' style={{ fontSize: '2.5rem' }}><Link style={{ color: 'black' }} href="../login"><i className="bi bi-box-arrow-in-right"></i></Link></p>
        <p title='Informações sobre Kósmos Tecnologia' style={{ fontSize: '2.5rem' }}><i className="bi bi-info-circle"></i></p>
      </aside>

      <div style={{ display: 'grid' }}><h1>Pagina do DashBoard</h1></div>

    </main>
  )
}
