import React, { useState } from "react";
import axios from "axios";
import { BaseURL } from "../constants/urls";
import IconLabeX from "../components/IconLabeX";
import Input from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { ContainerLogin } from "../components/styles/StyleLogin";

export default function LoginPage() {
  const navigate = useNavigate();
  const [inputPassword, setInputPassword] = useState("");
  const [inputEmail, setInputEmail] = useState("");

  const passwordChange = (e) => {
    setInputPassword(e.target.value);
  };
  const emailChange = (e) => {
    setInputEmail(e.target.value);
  };

  const onSubmit = () => {
    const body = {
      email: inputEmail,
      password: inputPassword,
    };
    const url = `${BaseURL}login`;
    axios
      .post(url, body)
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
      <IconLabeX />
      <h1>Login</h1>
      <Input
        className="text-field"
        color="secondary"
        label="Email"
        variant="filled"
        value={inputEmail}
        onChange={emailChange}
      />
      <Input
        className="text-field"
        color="secondary"
        label="Senha"
        variant="filled"
        value={inputPassword}
        onChange={passwordChange}
        type="password"
      />
      <Button
        onClick={onSubmit}
        color="primary"
        variant="contained"
        className="button-green"
      >
        Entrar
      </Button>
    </ContainerLogin>
  );
}
