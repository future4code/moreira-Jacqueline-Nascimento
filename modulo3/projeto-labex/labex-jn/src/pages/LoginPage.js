import React from "react";
import axios from "axios";
import { BaseURL } from "../constants/urls";
import { ButtonForm, Form, Input } from "../components/styles/StyleGeral";
import { useNavigate } from "react-router-dom";
import { ButtonArea, ContainerLogin } from "../components/styles/StyleLogin";
import Header from "../components/Header";
import { useForm } from "../hooks/useForm";

export default function LoginPage() {
  const navigate = useNavigate();
  const { form, onChange} = useForm({email:"", password:''})

  const handleSubmit = (event) => {
    event.preventDefault()
    const url = `${BaseURL}login`;
    const headers = {
      'Content-Type': 'application/json'}
    axios
      .post(url, form, {headers})
      .then((resp) => {
        localStorage.setItem("token", resp.data.token);
        navigate("/admin/trips/list", { replace: true });
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  return (
    <ContainerLogin>
      <Header path={"/"} />
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        <Input
          placeholder="Email"
          type="email"
          required
          name="email"
          value={form.email}
          onChange={onChange}
        />
        <Input
          placeholder="Senha"
          name="password"
          value={form.password}
          onChange={onChange}
          type="password"
          required
        />
        <ButtonArea>
          <ButtonForm>ENTRAR</ButtonForm>
        </ButtonArea>
      </Form>
    </ContainerLogin>
  );
}
