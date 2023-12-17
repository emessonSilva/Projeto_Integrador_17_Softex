import { BTN } from "@/components/button/button";
import { Input } from "@/components/input/input";
import Link from "next/link";


export default function Register() {
  return (
    <main>
      <div>
        <h1>Cadastre-se</h1>
      </div>

      <div><Input placeholder="Nome da Empresa" type="text" /></div>

      <div><Input placeholder="CNPJ/MEI" type="text" /></div>

      <div><Input placeholder="CEP" type="text" /></div>

      <div><Input placeholder="Telefone" /></div>

      <div><Input placeholder="Email" type="email" /></div>

      <div><Input placeholder="Senha" type="password" /></div>

      <div><Input placeholder="Confirmar Senha" type="password" /></div>

      <div>
        <textarea placeholder="O que a empresa faz?" cols={50} rows={6} required /></div>
      <div><Link href="../login" title="Entrar com login e senha">Já tem uma conta? Entre</Link></div>

      <div>
        <BTN name="Cadastrar" width="140px" height="50px" />
      </div>
    </main>
  );
}
