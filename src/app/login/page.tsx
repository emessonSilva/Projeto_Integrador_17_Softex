"use client"

import React from "react";
import { BTN } from "@/components/button/button";
import { Input } from "@/components/input/input";
import Link from "next/link";
import "./page.module.css"
import { useState } from "react";


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
            <div className="img"><img src="/logo.jpg" alt="Logo da empresa Kosmos TI" /></div>

            <div className="title">
                <h1>Olá, seja bem-vindo!</h1>
                <h2>Faça o seu login</h2>
            </div>

            <div style={{ display: "flex-colun" }}>
                <p>E-mail:</p>
                <Input value={email} onChange={(e) => handleChangeEmail(e.target.value)} height='2rem' width='30rem' type="email" placeholder="Digite seu email"></Input>
                {!validEmail && <p style={{ color: 'red' }}>E-mail inválido</p>}
            </div>

            <div style={{ display: "flex-colun" }}>
                <p >Senha:</p>
                <div style={{ display: "flex" }}>
                    <Input height='2rem' width='30rem' type={password ? 'text' : 'password'} placeholder="Digite sua senha" ></Input>
                    <Input type="checkbox" checked={password} onChange={showPassword}></Input>
                    <p>{password ? 'Ocultar' : 'Mostrar'}</p>
                </div>
            </div>

            <div>
                <Link href="../recoverpassword" title="Recupere sua senha"> Esqueceu a senha?</Link>
            </div>

            <div>
                <BTN type="button" name="ENTAR" width="140px" height="50px" ></BTN>
            </div>

            <div>
                <Link href="../register" title="Crie sua conta"> Ainda nao tem uma conta?</Link>
            </div>

        </main>
    )

}

