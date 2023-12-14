import Link from "next/link";


export default function Login() {
    return (
        <main>
            <div><img src="/logo.png" alt="Logo da empresa Kosmos TI" /></div>
            
            <div>
                <h1>Olá, seja bem-vindo!</h1>
                <h2>Faça o seu login</h2>
            </div>
            
            <div></div>

            <div></div>

            <div>  
             <Link href="../recoverPassword"> Esqueceu a senha?</Link>
            </div>

            <div></div>

            <div></div>
               
        </main>
    )

}
