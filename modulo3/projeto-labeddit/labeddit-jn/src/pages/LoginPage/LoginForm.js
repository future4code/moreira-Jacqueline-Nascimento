import React from "react";
import { ButtonForm, Form, Input } from "../../components/styles/StyleGeral";
import { useForm } from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";
import { postLogin } from "../../services/users";
import { useUnprotectedPage } from "../../hooks/useUnprotectedPage";

export default function LoginForm({textButton, setTextButton}) {
  useUnprotectedPage();
  const { form, onChange } = useForm({ email: "", password: "" });
  const navigate = useNavigate();

  const onSubmit = (event) => {
    event.preventDefault();
    postLogin(form, navigate, setTextButton);
  };
  return (
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
  );
}
