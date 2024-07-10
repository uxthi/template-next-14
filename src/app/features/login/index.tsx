"use client";

import React, { useState } from "react";
import { Container, WelcomeText, TitleWrapper, InputsWrapper } from "./styles";
import TextInput from "@/components/textField";
import Button from "@/components/button";
import { useRouter } from "next/navigation";

const Login: React.FC = () => {
  const [login, setLogin] = useState({ username: "", password: "" });
  const router = useRouter();

  const handleLogin = () => {
    console.log(login);
    router.push("/");
  };

  const handleInputChange =
    (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setLogin((prevState) => ({
        ...prevState,
        [field]: e.target.value,
      }));
    };

  return (
    <Container>
      <TitleWrapper>
        <WelcomeText>Faça login para continuar</WelcomeText>
      </TitleWrapper>
      <InputsWrapper>
        <TextInput
          label="Nome de usuário"
          required
          value={login.username}
          onChange={handleInputChange("username")}
        />
        <TextInput
          label="Senha"
          required
          type="password"
          value={login.password}
          onChange={handleInputChange("password")}
        />
        <Button onClick={handleLogin}>Enviar</Button>
      </InputsWrapper>
    </Container>
  );
};

export default Login;
