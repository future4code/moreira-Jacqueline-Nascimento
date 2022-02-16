import React from 'react'
import { ButtonsHeader, ContainerHeaderAdminHome } from './styles/StyleAdmin'
import { Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import IconLabeX from './IconLabeX';

export default function HeaderAdminHome() {
    const navigate = useNavigate()

    const goBack = () =>{
        navigate('/')
    }

    const goToCreateTrip = () =>{
        navigate('/admin/trips/create')
    }

    const logout = () => {
        localStorage.removeItem("token")
        navigate('/login')
      }

  return (
    <ContainerHeaderAdminHome>
        <IconLabeX />
        <ButtonsHeader>
            <Button
            variant="contained"
            className="button-white"
            onClick={goBack}
            >
            Voltar
            </Button>
            <Button onClick={goToCreateTrip} color="primary" variant="contained" className="button-green">
                Criar Viagem
            </Button>
            <Button
            variant="contained"
            className="button-white"
            onClick={logout}
            >
            Logout
            </Button>
        </ButtonsHeader>
    </ContainerHeaderAdminHome>
  )
}
