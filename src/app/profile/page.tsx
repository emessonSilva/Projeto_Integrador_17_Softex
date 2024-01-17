"use client"

import { BTN } from "@/components/button/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import { api } from "../../../services/api";

interface Company {
    empresaSegmento: string;
    nomeProprietario: string;
    nomeEmpresa: string;
    cnpj: string;
    cep: string;
    telefone: string;
    email: string;
    senha: string;
    id: string;
}

export default function Profile() {
    const [datas, setDatas] = useState<Company[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get('http://localhost:3001/companies');
                setDatas(response.data);

            } catch (error) {
                console.error('Erro ao obter dados do banco:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <main style={{ height: "100vh", display: "flexColun", padding: "155px" }}>
            <h1 style={{ marginBottom: "40px" }}>Pagina de Perfil</h1>
            <p style={{ margin: "20px", width: "100%", padding: "5px", backgroundColor: "rgb(184, 185, 185)" }}>{datas.map(e => e.nomeEmpresa)}</p>
            <div style={{ margin: "20px", display: "flex", alignItems: "center", gap: "40px" }}>
                <p style={{ width: "50%", backgroundColor: "rgb(184, 185, 185)" }} >{datas.map(e => e.cnpj)}</p>
                <p style={{ width: "50%", backgroundColor: "rgb(184, 185, 185)" }} >{datas.map(e => e.cep)}</p>
            </div>
            <div style={{ margin: "20px", display: "flex", alignItems: "center", gap: "40px" }}>
                <p style={{ width: "50%", padding: "5px", backgroundColor: "rgb(184, 185, 185)" }} >{datas.map(e => e.nomeProprietario)}</p>
                <p style={{ width: "50%", padding: "5px", backgroundColor: "rgb(184, 185, 185)" }} >{datas.map(e => e.telefone)}</p>
            </div>
            <p style={{ margin: "20px", width: "100%", padding: "5px", backgroundColor: "rgb(184, 185, 185)" }} >{datas.map(e => e.email)}</p>
            <p style={{ margin: "20px", width: "100%", padding: "5px", backgroundColor: "rgb(184, 185, 185)" }} >{datas.map(e => e.empresaSegmento)}</p>
            <Link href="/">
                <BTN
                    margin={20}
                    borderRadius={10}
                    color="white"
                    backgroundColor="#0F4EF0"
                    type="button"
                    name="Dasboard"
                    width="200px"
                    height="50px"
                ></BTN>
            </Link>
        </main>
    )
}