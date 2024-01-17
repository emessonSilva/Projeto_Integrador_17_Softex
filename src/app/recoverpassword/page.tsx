"use client"

import { BTN } from "@/components/button/button";
import { Input } from "@/components/input/input";
import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "@/app/recoverpassword/page.css";

export default function RecoverPassword() {
    return (
        <main >
            <h1>Redefinir senha </h1>
            <Link href={"/login"}><i className="bi bi-arrow-left" title="Voltar para Login"></i></Link>
            <section>
                <div className="divNoveSenha">
                    <p>Nova Senha *</p>
                    <Input placeholder="Nova Senha" padding="5px" backgroundColor="rgb(184, 185, 185)" />
                </div>
                <div className="divConfirmarSenha">
                    <p>Confirmar Senha *</p>
                    <Input placeholder="Confirmar Senha" padding="5px" backgroundColor="rgb(184, 185, 185)" />
                </div>
            </section>
            <p>(*)Campos Obrigatórios</p>
            <Link href="/login"><BTN name="Alterar" backgroundColor="#0F4EF0" color="white" width="200px"
                height="50px" borderRadius={10} /></Link>
        </main>
    );
}