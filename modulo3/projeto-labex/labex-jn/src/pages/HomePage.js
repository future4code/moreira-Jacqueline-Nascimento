import React from "react";
import {
  ButtonArea,
  ContainerHome,
  ImageArea,
} from "../components/styles/StyleHome";
import { Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  const goToTrips = () => {
    navigate(`/trips/list`);
  };

  return (
    <ContainerHome>
      <ButtonArea>
        <h1>LabeX</h1>
        <p>
          O planeta que você sempre quis conhecer! <br />
          Encontro sua viagem dos sonhos e diga-nos porque você a merece.
        </p>
        <Button
          onClick={goToTrips}
          color="primary"
          variant="contained"
          className="button-green"
        >
          Viagens
        </Button>
        <Button variant="contained" className="button-white">
          Área Admin
        </Button>
      </ButtonArea>
      <ImageArea></ImageArea>
    </ContainerHome>
  );
}
