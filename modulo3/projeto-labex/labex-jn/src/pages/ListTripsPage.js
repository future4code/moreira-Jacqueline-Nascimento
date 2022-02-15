import React from 'react'
import CardTrip from '../components/CardTrip';
import HeaderTrips from '../components/HeaderTrips'
import { ContainerTrips, MainTrips, TripsArea } from '../components/styles/StyleTrips'
import { BaseURL } from "../constants/urls";
import useRequestData from "../hooks/useRequestData"

export default function ListTripsPage() {
    const [trips, isLoading, error] = useRequestData(`${BaseURL}trips`);

    const tripsList =
    trips &&
    trips.trips.map((item) => {
      return <CardTrip key={item.id} trip={item} />;
    });
  return (
    <ContainerTrips>
        <HeaderTrips />
        <MainTrips>
            <h2>Conheça nossas viagens</h2>
            <TripsArea>
                {isLoading && <p>Carregando...</p>}
                {!isLoading && error && <p>Ocorreu um erro</p>}
                {!isLoading && tripsList && tripsList}
            </TripsArea>
        </MainTrips>
    </ContainerTrips>
  )
}
