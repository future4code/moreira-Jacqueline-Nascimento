import styled from "styled-components";
import { mainColors } from "../../constants/colors";

export const ContainerTrips = styled.div`
    display: flex;
    flex-direction: column;
`

export const ContainerHeaderTrips = styled.div`
    height: 120px;
    border-bottom: 1px solid white;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const ButtonsHeader = styled.div`
    display: flex;
`
export const MainTrips = styled.div`
    display: flex;
    flex-direction: column;
`
export const TripsArea = styled.div`
    display: flex;
    flex-wrap: wrap;
    background-color: ${mainColors.fundo};
    justify-content: center;
`