import React from "react";
import { ButtonForm, Form, Input } from "../../components/styles/StyleGeral";
import { useForm } from "../../hooks/useForm";
import { createPost } from "../../services/posts";
import { InputText } from "./StyleFeed";

export default function FeedForm() {
  const { form, onChange, cleanFields } = useForm({ title: "", body: "" });

  const onSubmit = (event) => {
    event.preventDefault();
    createPost(form)
    cleanFields()
  };
  return (
    <Form onSubmit={onSubmit}>
      <Input
        name="title"
        value={form.title}
        onChange={onChange}
        required
        placeholder="Título"
      />
      <InputText
        name="body"
        value={form.body}
        onChange={onChange}
        required
        placeholder="Escreva seu texto"
      />
      <ButtonForm>POSTAR</ButtonForm>
    </Form>
  );
}
