import { BTN } from "@/app/components/botao/botao";
import Input from "@/app/components/input/input";
import Link from "next/link";
import "./style.css"

export default function Login() {
    return (
        <main>
            <div className="img"><img src="/logo.jpg" alt="Logo da empresa Kosmos TI" /></div>

            <div className="title">
                <h1>Olá, seja bem-vindo!</h1>
                <h2>Faça o seu login</h2>
            </div>

            <div><Input type="email" placeholder="Digite seu email"></Input></div>

            <div><Input type="password" placeholder="Digite sua senha" ></Input></div>

            <div>
                <Link href="../recoverPassword" title="Recupere sua senha"> Esqueceu a senha?</Link>
            </div>

            <div><BTN type="button" name="ENTAR" width="140px" height="50px" ></BTN></div>

            <div><Link href="../register" title="Crie sua conta"> Ainda nao tem uma conta?</Link></div>

        </main>
    )

}
