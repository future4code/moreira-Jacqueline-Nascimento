import React from 'react'
import { ButtonsHeader, ContainerHeaderTrips } from './styles/StyleTrips'
import { Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import IconLabeX from './IconLabeX';

export default function HeaderTrips() {
    const navigate = useNavigate()

    const goBack = () =>{
        navigate(-1)
    }

    const goToApplicationForm = () =>{
        navigate('/trips/application')
    }

  return (
    <ContainerHeaderTrips>
        <IconLabeX />
        <ButtonsHeader>
            <Button
            variant="contained"
            className="button-white"
            onClick={goBack}
            >
            Voltar
            </Button>
            <Button onClick={goToApplicationForm} color="primary" variant="contained" className="button-green">
                Inscrever-se
            </Button>
        </ButtonsHeader>
    </ContainerHeaderTrips>
  )
}
