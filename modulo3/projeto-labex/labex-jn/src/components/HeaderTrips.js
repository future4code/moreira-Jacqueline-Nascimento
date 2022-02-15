import React from 'react'
import { ButtonsHeader, ContainerHeaderTrips } from './styles/StyleTrips'
import { Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

export default function HeaderTrips() {
    const navigate = useNavigate()

    const goBack = () =>{
        navigate(-1)
    }

  return (
    <ContainerHeaderTrips>
        <h1>LabeX</h1>
        <ButtonsHeader>
            <Button
            variant="contained"
            className="button-white"
            onClick={goBack}
            >
            Voltar
            </Button>
            <Button color="primary" variant="contained" className="button-green">
                Inscrever-se
            </Button>
        </ButtonsHeader>
    </ContainerHeaderTrips>
  )
}
