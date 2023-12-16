import { BTN } from "@/app/components/botao/botao";
import Input from "@/app/components/input/input";


export default function RecoverPassword() {
    return (
        <>
            <h1>Alteração de senha</h1>

            <div><Input placeholder="Nova Senha" /></div>
            <div><Input placeholder="Confirmar Senha" /></div>

            <BTN width="140px" height="40px" name="Alterar"/>
        </>
    );
}