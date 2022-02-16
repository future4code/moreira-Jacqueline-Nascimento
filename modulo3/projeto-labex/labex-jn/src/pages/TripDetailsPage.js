import React, {useState,useEffect} from 'react'
import { useProtectedPage } from '../hooks/useProtectedPage';
import axios from 'axios';
import { BaseURL } from '../constants/urls';
import { useParams } from 'react-router-dom';

export default function TripDetailsPage() {
  useProtectedPage()
  const [trip, setTrip] = useState({})
  const pathParams = useParams()

  useEffect(()=>{
    const url = `${BaseURL}trip/${pathParams.id}`
    const token = localStorage.getItem("token")
    const headers = {
      auth: token
    }
    axios.get(url, {headers})
    .then((resp)=>{console.log(resp.data)
    setTrip(resp.data.trip)})
    .catch((err)=>{console.log(err.response)})

  },[])

  return (
    <div>
      {trip&&trip.name&&<h1>{trip.name}</h1>}
    </div>
  )
}
