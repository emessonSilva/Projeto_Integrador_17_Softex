import { BTN } from "@/components/button/button";
import { Input } from "@/components/input/input";
import Link from "next/link";


export default function RecoverPassword() {
    return (
        <main>
            <h1>Alteração de senha</h1>
            <Link href={"/login"}>Login</Link>
            <div><Input placeholder="Nova Senha" /></div>
            <div><Input placeholder="Confirmar Senha" /></div>

            <BTN width="140px" height="40px" name="Alterar" />
        </main>
    );
}