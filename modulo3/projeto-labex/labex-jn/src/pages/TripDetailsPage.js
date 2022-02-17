import React, { useState, useEffect } from "react";
import { useProtectedPage } from "../hooks/useProtectedPage";
import axios from "axios";
import { BaseURL } from "../constants/urls";
import { useParams, useNavigate } from "react-router-dom";
import {
  ApprovedArea,
  Area1,
  Area2,
  ButtonArea,
  ContainerTripDetails,
  DescriptionArea,
  Title,
} from "../components/styles/StyleTripDetails";
import { Button } from "@material-ui/core";
import IconLabeX from "../components/IconLabeX";
import CardCandidate from "../components/CardCandidate";

export default function TripDetailsPage() {
  useProtectedPage();
  const [trip, setTrip] = useState({});
  const pathParams = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const url = `${BaseURL}trip/${pathParams.id}`;
    const token = localStorage.getItem("token");
    const headers = {
      auth: token,
    };
    axios
      .get(url, { headers })
      .then((resp) => {
        console.log(resp.data);
        setTrip(resp.data.trip);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);

  const goBack = () => {
    navigate(-1);
  };

  return (
    <ContainerTripDetails>
      <ButtonArea>
        <IconLabeX />
        <Button onClick={goBack} variant="contained" className="button-white">
          Voltar
        </Button>
      </ButtonArea>
      <Title>{trip && trip.name && <h1>{trip.name}</h1>}</Title>
      <Area1>
        {trip && trip.name && (
          <DescriptionArea>
            <p>
              <b>{trip.date}</b>
            </p>
            <p>{trip.description}</p>
            <p>
              Duração: <b>{trip.durationInDays}</b> dias
            </p>
          </DescriptionArea>
        )}
        <ApprovedArea>
          <h3>Candidatos Aprovados:</h3>
          {trip && trip.approved && (trip.approved.length === 0 ? (
            <p>Nenhum candidato aprovado</p>
          ) : (
            <ol>{trip.approved.map((item) => {
              return <li key={item.id}>{item.name}, {item.age}, {item.country}</li>;
            })}</ol>
          ))}
        </ApprovedArea>
      </Area1>
      <Area2>
            <h2>Candidatos Pendentes:</h2>
              <div>
              {trip && trip.candidates && (trip.candidates.length === 0 ? (
                <p>Nenhum candidato</p>
              ) : (
                trip.candidates.map((item) => {
                  return <CardCandidate key={item.id} candidate={item} />;
                })
              ))}
            </div>
      </Area2>
    </ContainerTripDetails>
  );
}
