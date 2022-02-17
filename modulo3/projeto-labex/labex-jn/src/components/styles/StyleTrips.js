import styled from "styled-components";
import { mainColors } from "../../constants/colors";

export const ContainerTrips = styled.div`
    display: flex;
    flex-direction: column;
`
export const MainTrips = styled.div`
    display: flex;
    flex-direction: column;
`
export const TripsArea = styled.div`
    display: flex;
    flex-wrap: wrap;
    background-color: ${mainColors.fundo};
    justify-content: space-around;
`