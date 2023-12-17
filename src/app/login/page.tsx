"use client"

import { BTN } from "@/components/button/button";
import { Input } from "@/components/input/input";
import Link from "next/link";
import "./page.module.css"
import { useState } from "react";


export default function Login() {

    const [password, setPassword] = useState<boolean>(false)

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
                <Input height='2rem' width='30rem' type="email" placeholder="Digite seu email"></Input>
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

