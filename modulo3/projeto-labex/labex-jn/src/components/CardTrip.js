import React from 'react'
import styled from 'styled-components'
import planets from '../constants/planets'
import { mainColors } from "../constants/colors";

const Container = styled.div`
    width: 250px;
    height: 400px;
    background-color: white;
    margin: 30px;
    color: ${mainColors.secundario};
    box-shadow: rgb(117 117 117 / 77%) 0px 2px 10px 0px;
`
const AreaImg = styled.div`
    height: 250px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-image: url(${props => props.url});
`

export default function CardTrip(props) {
  return (
    <Container>
        <AreaImg url={planets(props.trip.planet)}></AreaImg>
        <h3>{props.trip.name}</h3>
        <p>{props.trip.description}</p>
        
    </Container>
  )
}
