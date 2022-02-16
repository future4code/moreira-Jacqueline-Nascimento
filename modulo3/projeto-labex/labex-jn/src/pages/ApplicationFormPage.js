import React from "react";
import IconLabeX from "../components/IconLabeX";
import { ContainerForm } from "../components/styles/StyleApplicationForm";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

export default function ApplicationFormPage() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <ContainerForm>
      <IconLabeX />
      <h1>Inscreva-se</h1>
      <TextField
        className="text-field"
        color="secondary"
        label="Nome"
        variant="filled" 
      />
      <TextField
        className="text-field"
        color="secondary"
        label="Idade"
        variant="filled" 
      />
      <TextField
        className="text-field"
        color="secondary"
        label="Sua história"
        variant="filled" 
      />
      <TextField
        className="text-field"
        color="secondary"
        label="Profissão"
        variant="filled" 
      />
      <Button onClick={goBack} className="button-white">Voltar</Button>
    </ContainerForm>
  );
}
