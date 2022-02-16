import React from 'react'
import { useProtectedPage } from '../hooks/useProtectedPage';
import HeaderAdminHome from '../components/HeaderAdminHome';
import { ContainerAdminHome, TripsArea } from '../components/styles/StyleAdmin';
import { BaseURL } from "../constants/urls";
import useRequestData from "../hooks/useRequestData"
import CardTripAdmin from '../components/CardTripAdmin';

export default function AdminHomePage() {
  useProtectedPage()
  const [trips, isLoading, error] = useRequestData(`${BaseURL}trips`);

  const tripsList =
    trips &&
    trips.trips.map((item) => {
      return <CardTripAdmin key={item.id} trip={item} />;
    });

  return (
    <ContainerAdminHome>
      <HeaderAdminHome />
      <h2>Painel Adiministrativo</h2>
      <TripsArea>
          {isLoading && <p>Carregando...</p>}
          {!isLoading && error && <p>Ocorreu um erro</p>}
          {!isLoading && tripsList && tripsList}
      </TripsArea>
    </ContainerAdminHome>
  )
}
