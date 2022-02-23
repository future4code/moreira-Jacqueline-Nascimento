import React from "react";
import { ButtonForm, Form } from "../../components/styles/StyleGeral";
import { useForm } from "../../hooks/useForm";
import { createComment } from "../../services/posts";
import { InputText } from "./StylePost";

export default function PostForm({id}) {
  const { form, onChange, cleanFields } = useForm({ body: "" });

  const onSubmit = (event) => {
    event.preventDefault();
    createComment(form, id)
    cleanFields()
  };
  return (
    <Form onSubmit={onSubmit}>
      <InputText
        name="body"
        value={form.body}
        onChange={onChange}
        required
        placeholder="Escreva seu comentário"
      />
      <ButtonForm>COMENTAR</ButtonForm>
    </Form>
  );
}
