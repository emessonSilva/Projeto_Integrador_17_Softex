import { BTN } from "@/app/components/botao/botao";
import Input from "@/app/components/input/input";
import Link from "next/link";


export default function Login() {
    return (
        <main>
            <div><img src="/logo.jpg" alt="Logo da empresa Kosmos TI" /></div>

            <div>
                <h1>Olá, seja bem-vindo!</h1>
                <h2>Faça o seu login</h2>
            </div>

            <div><Input type="email" placeholder="Digite seu email"></Input></div>

            <div><Input type="password" placeholder="Digite sua senha" ></Input></div>

            <div>
                <Link href="../recoverPassword" title="RECUPERE SUA SENHA"> Esqueceu a senha?</Link>
            </div>

            <div><BTN type="button" name="ENTAR" width="200px" height="70px" ></BTN></div>

            <div><Link href="../register" title="CRIE SUA CONTA"> Ainda nao tem uma conta?</Link></div>

        </main>
    )

}
