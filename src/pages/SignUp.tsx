import { useState } from "react";
import { Input } from "../components/Input"
import { Button } from "../components/Button"
import { Link } from "react-router";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    
    console.log(name, email, password, passwordConfirm);
  }

  return (
    <form onSubmit={onSubmit} className="w-full flex flex-col gap-4">
      <Input 
        required 
        legend="Name" 
        type="text" 
        placeholder={"Seu nome"}
        onChange={(e) => setName(e.target.value)}
      />
      
      <Input 
        required 
        legend="E-Mail" 
        type="email" 
        placeholder={"email@email.com"}
        onChange={(e) => setEmail(e.target.value)}
      />
      
      <Input 
        required 
        legend="Senha" 
        type="password" 
        placeholder={"123456"}
        onChange={(e) => setPassword(e.target.value)}
      />
      
      <Input 
        required 
        legend="Confirmação da senha" 
        type="password" 
        placeholder={"123456"}
        onChange={(e) => setPasswordConfirm(e.target.value)}
      />

      <Button type="submit" isLoading={isLoading}>Cadastrar</Button>

      <Link to={"/"} className="text-sm font-semibold mt-10 mb-4 
      text-center hover:text-green-800 transition ease-linear">Já tenho uma conta</Link>
    </form>
  )
}