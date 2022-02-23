import React from "react";
import { ButtonForm, Form, Input } from "../../components/styles/StyleGeral";
import { useForm } from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";
import { postSignUp } from "../../services/users";

export default function SignUpForm({setTextButton}) {
  const { form, onChange } = useForm({username:'', email: "", password: "" });
  const navigate = useNavigate();

  const onSubmit = (event) => {
    event.preventDefault();
    postSignUp(form, navigate, setTextButton)
  };
  return (
      <Form onSubmit={onSubmit}>
        <Input
          name="username"
          value={form.username}
          onChange={onChange}
          required
          placeholder="Usuário"
        />
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
        <ButtonForm>CRIAR</ButtonForm>
      </Form>
  );
}
