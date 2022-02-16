import styled from "styled-components";
import { mainColors } from "../../constants/colors";

export const ContainerAdminHome = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
`

export const ContainerHeaderAdminHome = styled.div`
    height: 120px;
    border-bottom: 1px solid white;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    margin-bottom: 20px;
`

export const ButtonsHeader = styled.div`
    display: flex;
`
export const TripsArea = styled.div`
    display: flex;
    flex-wrap: wrap;
    background-color: ${mainColors.fundo};
    justify-content: space-around;
`