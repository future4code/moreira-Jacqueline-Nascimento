import React from 'react'
import { ButtonsHeader, ContainerHeader } from './styles/StyleHeader'
import { Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import IconLabeX from './IconLabeX';

export default function Header(props) {
    const navigate = useNavigate()

    const goBack = () =>{
        navigate(props.path)
    }

  return (
    <ContainerHeader>
        <IconLabeX />
        <ButtonsHeader>
            <Button
            variant="contained"
            className="button-white"
            onClick={goBack}
            >
            Voltar
            </Button>
        </ButtonsHeader>
    </ContainerHeader>
  )
}