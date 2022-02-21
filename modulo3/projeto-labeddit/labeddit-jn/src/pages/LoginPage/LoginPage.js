import React from "react";
import Header from "../../components/Header";
import { ButtonForm, Form, Input } from "../../components/styles/StyleGeral";
import { ContainerLogin } from "./StyleLogin";
import { Button } from "@material-ui/core";
import { useForm } from "../../hooks/useForm";
import { baseURL } from "../../constants/urls";
import axios from "axios";

export default function LoginPage() {
  const { form, onChange } = useForm({ email: "", password: "" });

  const onSubmit = (event) => {
    event.preventDefault();
    const url = `${baseURL}users/login`
    const headers = {
        'Content-Type':'application/json'
    }
    axios.post(url, form, {headers})
    .then((resp)=>{console.log(resp.data.token)})
    .catch((err)=>{console.log(err.response.data)})
  };
  return (
    <ContainerLogin>
      <Header />
      <Form onSubmit={onSubmit}>
        <Input
          type={"email"}
          name="email"
          value={form.email}
          onChange={onChange}
          required
          placeholder="Email"
        />
        <Input
          type={"password"}
          name="password"
          value={form.password}
          onChange={onChange}
          required
          placeholder="Senha"
        />
        <ButtonForm>LOGIN</ButtonForm>
      </Form>
      <Button variant="contained" color="primary">
        Cadastar
      </Button>
    </ContainerLogin>
  );
}
