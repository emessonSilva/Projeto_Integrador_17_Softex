"use client"

import React from "react";
import { BTN } from "@/components/button/button";
import { Input } from "@/components/input/input";
import Link from "next/link";
import "../login/style.css";
import { useState } from "react";
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

    return (
        <main>
          <div className="img" style={{ textAlign: 'center', marginTop: '10px' }}>
            <img style={{width: '350px'}} src="/logo.png" alt="Logo da empresa Kosmos TI" />
          </div>
      
          <div className="title" style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Olá, seja bem-vindo!</h1>
            <h2>Faça o seu login</h2>
          </div>
      
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '40px' }}>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1" style={{marginBottom: '10px'}}>Email</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Digite seu email"
                value={email}
                onChange={(e) => handleChangeEmail(e.target.value)}
                style={{ width: '500px', marginRight: '10px'}}
              />
            </div>
            {!validEmail && <p style={{ color: 'red', marginRight: '400px' }}>E-mail inválido</p>}
          </div>
      
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
            <div className="form-group" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '24px' }}>
              <label htmlFor="exampleInputPassword1">Senha</label>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <input
                  type={password ? 'text' : 'password'}
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Digite sua senha"
                  style={{ width: '500px', marginTop: '10px' }}
                />
                <div style={{ cursor: 'pointer', marginTop: '10px' }} onClick={showPassword}>
                  {password ? (
                    <i className="bi bi-eye" style={{ marginLeft: '10px', color: 'black'}}></i>
                  ) : (
                    <i className="bi bi-eye-slash" style={{ marginLeft: '10px', color: 'black' }}></i>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="recover-password-link" style={{ marginTop: '14px', marginLeft: '870px' }}>
            <Link style={{textDecoration: 'none', color: 'black'}} href="../recoverpassword" title="Recupere sua senha"> Esqueceu a senha?</Link>
          </div>
      
          <div style={{ textAlign: 'center',  marginTop: '50px' }}>
            <BTN borderRadius={10} color="white" backgroundColor="#0F4EF0" type="button" name="Entrar" width="200px" height="50px" ></BTN>
          </div>
      
          <div style={{ textAlign: 'center' ,  marginTop: '60px'}}>
            <Link style={{textDecoration: 'none', color: 'black'}} href="../register" title="Crie sua conta"> Ainda nao tem uma conta? Cadastre-se</Link>
          </div>
        </main>
      );
      

}

