'use client'

import { BTN } from "@/components/button/button";
import { Input } from "@/components/input/input";
import Link from "next/link";
import { useState } from 'react'
import { api } from "../../../services/api";


export default function Register() {

  const [formData, setFormData] = useState({
    nomeEmpresa: '',
    cnpj: '',
    cep: '',
    telefone: '',
    email: '',
    senha: '',
    confirmarSenha: '',
  })

  //funçao para salvar dados digitados
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  //funçao para enviar formulario
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const response = await api.post("/empresas", formData);
  };

  return (
    <main>
      <div>
        <h1>Cadastre-se</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div> <Input placeholder="Nome da Empresa" type="text" name="nomeEmpresa" value={formData.nomeEmpresa} onChange={handleChange} /></div>

        <div><Input placeholder="CNPJ/MEI" type="text" name="cnpj" value={formData.cnpj} onChange={handleChange} /></div>

        <div><Input placeholder="CEP" type="text" name="cep" value={formData.cep} onChange={handleChange} /></div>

        <div><Input placeholder="Telefone" name="telefone" value={formData.telefone} onChange={handleChange} /></div>

        <div><Input placeholder="Email" type="email" name="email" value={formData.email} onChange={handleChange} /></div>

        <div><Input placeholder="Senha" type="password" name="senha" value={formData.senha} onChange={handleChange} /></div>

        <div><Input placeholder="Confirmar Senha" type="password" name="confirmarSenha" value={formData.confirmarSenha} onChange={handleChange} /></div>

        <div>
          <textarea placeholder="O que a empresa faz?" cols={50} rows={6} required /></div>
        <div><Link href="../login" title="Entrar com login e senha">Já tem uma conta? Entre</Link></div>

        <div>
          <BTN type="submit" name="Cadastrar" width="140px" height="50px" />
        </div>
      </form>
    </main>
  );
}
