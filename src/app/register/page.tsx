"use client"

import React from "react";
import { BTN } from "@/components/button/button";
import Link from "next/link";
import "../login/style.css";
import { useState } from "react";
import { api } from "../../../services/api";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


export default function Login() {

    const [email, setEmail] = useState<string>('')
    const [validEmail, setValidEmail] = useState<boolean>(true)
    const [password, setPassword] = useState<boolean>(false)

    //funçao para checar caracteres do email 
    function emailChecked(email: string): boolean {
        const regex = (/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
        return regex.test(email);
    }

    //funçao para validar email
    function handleChangeEmail(newEmail: string) {
        setEmail(newEmail);
        setValidEmail(emailChecked(newEmail));
    };

    //funçao para mostrar e esconder senha
    function showPassword() {
        setPassword(!password)
    }

  //   //funçao para salvar dados digitados
  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;
  //   setFormData((prevData) => ({ ...prevData, [name]: value }));
  // };

  //funçao para enviar formulario
  // async function handleSubmit(e: React.FormEvent) {
  //   e.preventDefault();

  //   const response = await api.post("/empresas", formData);
  // };

  return (
    <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div className="title" style={{ textAlign: 'center', marginTop: '10px' }}>
        <h1>Cadastre-se</h1>
      </div>

      <div style={{height: '4px', width: '70%', backgroundColor: 'black', borderRadius: '2px', marginTop: '10px'}}/>

      

      <form
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '10px',
          alignItems: 'center',
          marginTop: '30px',
          gridTemplateAreas: `
            "name name"
            "cnpj cep"
            "owner phone"
            "email email"
            "password confirmPassword"
            "description description"
          `,

        }}
      >
        <div style={{ gridArea: 'name' }}>
          <div className="form-group">
            <label htmlFor="exampleInputText">Nome da empresa</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputText"
              placeholder="Digite o nome da empresa"
              style={{ width: '1200px' }}
            />
          </div>
        </div>
  
        <div style={{ gridArea: 'cnpj' }}>
          <div className="form-group">
            <label htmlFor="exampleInputText1">CNPJ/MEI</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputText1"
              placeholder="Digite o CNPJ/MEI da empresa"
              style={{ width: '100hw' }}
            />
          </div>
        </div>
  
        <div style={{ gridArea: 'cep' }}>
          <div className="form-group">
            <label htmlFor="exampleInputText2">CEP</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputText2"
              placeholder="00000-000"
              style={{ width: '100hw' }}
            />
          </div>
        </div>
  
        <div style={{ gridArea: 'owner' }}>
          <div className="form-group">
            <label htmlFor="exampleInputText3">Proprietário(a)</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputText3"
              placeholder="Digite o nome do(a) proprietário(a)"
              style={{width: '100hw' }}
            />
          </div>
        </div>
  
        <div style={{ gridArea: 'phone' }}>
          <div className="form-group">
            <label htmlFor="exampleInputText4">Telefone/Celular</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputText4"
              placeholder="(00) 00000-0000"
              style={{ width: '100hw' }}
            />
          </div>
        </div>
  
        <div style={{ gridArea: 'email' }}>
          <div className="form-group" >
            <label htmlFor="exampleInputEmail1">Email</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Digite seu email"
              value={email}
              onChange={(e) => handleChangeEmail(e.target.value)}
              style={{ width: '100hw' }}
            />
            {!validEmail && (
              <p style={{ color: 'red', marginTop: '10px' }}>E-mail inválido</p>
            )}
          </div>
        </div>
  
        <div style={{ gridArea: 'password' }}>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Senha</label>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <input
                type={password ? 'text' : 'password'}
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Digite sua senha"
                style={{width: '100hw' }}
              />
              <div
                style={{ cursor: 'pointer', marginLeft: '10px' }}
                onClick={showPassword}
              >
                {password ? (
                  <i className="bi bi-eye" style={{ color: 'black' }}></i>
                ) : (
                  <i className="bi bi-eye-slash" style={{ color: 'black' }}></i>
                )}
              </div>
            </div>
          </div>
        </div>
  
        <div style={{ gridArea: 'confirmPassword' }}>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Confirmar senha</label>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <input
                type={password ? 'text' : 'password'}
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Digite sua senha"
                style={{ width: '100hw'}}
              />
              <div
                style={{ cursor: 'pointer', marginLeft: '10px' }}
                onClick={showPassword}
              >
                {password ? (
                  <i className="bi bi-eye" style={{ color: 'black' }}></i>
                ) : (
                  <i className="bi bi-eye-slash" style={{ color: 'black' }}></i>
                )}
              </div>
            </div>
          </div>
        </div>
  
        <div style={{ gridArea: 'description' }}>
          <div className="form-group" >
            <label htmlFor="exampleInputText4">O que sua empresa faz?</label>
            <textarea
              className="form-control"
              id="exampleInputText5"
              placeholder="O que sua empresa faz?"
              style={{ width: '100hw' }}
              cols={50}
              rows={4}
              required
            />
          </div>
        </div>
      </form>
  
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <BTN
          borderRadius={10}
          color="white"
          backgroundColor="#0F4EF0"
          type="button"
          name="Cadastrar"
          width="200px"
          height="50px"
        ></BTN>
      </div>
  
      <div style={{ textAlign: 'center', marginTop: '30px' }}>
        <Link
          style={{ textDecoration: 'none', color: 'black' }}
          href="../login"
          title="Crie sua conta"
        >
          Já tem uma conta? Entre
        </Link>
      </div>
    </main>
  );
  
}

// 'use client'

// import { BTN } from "@/components/button/button";
// import { Input } from "@/components/input/input";
// import Link from "next/link";
// import { useState } from 'react'
// import { api } from "../../../services/api";


// export default function Register() {

//   const [formData, setFormData] = useState({
//     nomeEmpresa: '',
//     cnpj: '',
//     cep: '',
//     telefone: '',
//     email: '',
//     senha: '',
//     confirmarSenha: '',
//   })

//   //funçao para salvar dados digitados
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   //funçao para enviar formulario
//   async function handleSubmit(e: React.FormEvent) {
//     e.preventDefault();

//     const response = await api.post("/empresas", formData);
//   };

//   return (
//     <main>
//        <div style={{ maxWidth: '500px', margin: 'auto' }}>
//       <div>
//         <h1>Cadastre-se</h1>
//       </div>
//       <form onSubmit={handleSubmit}>
//         <div> <input type="text" placeholder="NOME DA EMPRESA" style={styles.input}  value={formData.nomeEmpresa} onChange={handleChange} /></div>

//         <div><Input placeholder="CNPJ/MEI" type="text" name="cnpj" value={formData.cnpj} onChange={handleChange} /></div>

//         <div><Input placeholder="CEP" type="text" name="cep" value={formData.cep} onChange={handleChange} /></div>

//         <div><Input placeholder="Telefone" name="telefone" value={formData.telefone} onChange={handleChange} /></div>

//         <div><Input placeholder="Email" type="email" name="email" value={formData.email} onChange={handleChange} /></div>

//         <div><Input placeholder="Senha" type="password" name="senha" value={formData.senha} onChange={handleChange} /></div>

//         <div><Input placeholder="Confirmar Senha" type="password" name="confirmarSenha" value={formData.confirmarSenha} onChange={handleChange} /></div>

//         <div>
//           <textarea placeholder="O que a empresa faz?" cols={50} rows={6} required /></div>
//         <div><Link href="../login" title="Entrar com login e senha">Já tem uma conta? Entre</Link></div>

//         <div>
//           <BTN type="submit" name="Cadastrar" width="140px" height="50px" />
//         </div>
//       </form>
//       </div>
//     </main>
//   );
// }

