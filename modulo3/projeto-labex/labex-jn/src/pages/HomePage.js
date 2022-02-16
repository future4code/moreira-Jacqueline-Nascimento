import React from "react";
import {
  ButtonArea,
  ContainerHome,
  ImageArea,
  LateralMenu,
  TitleSubtitle
} from "../components/styles/StyleHome";
import { Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import foguete from "../assets/foguete.gif"
import IconLabeX from "../components/IconLabeX";

export default function HomePage() {
  const navigate = useNavigate();

  const goToTrips = () => {
    navigate(`/trips/list`);
  };

  const goToAdmin = () => {
    navigate("/admin/trips/list")
  }

  return (
    <ContainerHome>
      <LateralMenu>
        <TitleSubtitle>
          <IconLabeX/>
          <h3>
            Viagens Interplanetárias! <br />
            Encontre sua viagem dos sonhos e diga-nos porque você a merece.
          </h3>
        </TitleSubtitle>
        <img src={foguete} />
        <ButtonArea>
          <Button
            onClick={goToTrips}
            color="primary"
            variant="contained"
            className="button-green"
          >
            Viagens
          </Button>
          <Button onClick={goToAdmin} variant="contained" className="button-white">
            Área Admin
          </Button>
        </ButtonArea>
      </LateralMenu>
      <ImageArea></ImageArea>
    </ContainerHome>
  );
}
