import { BlobOptions } from "buffer";
import { useState } from "react";

interface propsInput {

    placeholder?: string;
    type?: string;
    name?: string;
    value?: string;
    padding?: string
    width?: string;
    height?: string;
    fontSize?: string;
    checked?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export function Input({ name, placeholder, type, value, height, width, checked, fontSize, onChange }: propsInput) {
    return (

        <input
            onChange={onChange}
            checked={checked}
            value={value}
            type={type}
            name={name}
            placeholder={placeholder}
            style={{ height, width, fontSize }}
        ></input>



    )
}
;

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(true);
  
    const handleEmailChange = (event:any) => {
      setEmail(event.target.value);
    };
  
    const handleLogin = async () => {
      try {
        
        const response = await fetch(`http://192.168.3.42:3001/verificar-email?email=${email}`);
        const data = await response.json();
  
        if (data.emailExistente) {
          
          console.log('Email válido. Prosseguir com a autenticação...');
        } else {
          setIsEmailValid(false);
        }
      } catch (error) {
        console.error('Erro ao verificar o email:', error);
      }
    };
  
    return (
      <div>
        <h1>Página de Login</h1>
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        {!isEmailValid && <p>Email não encontrado. Verifique o email digitado.</p>}
        <button onClick={handleLogin}>Login</button>
      </div>
    );
  };
  
  export default LoginPage;

