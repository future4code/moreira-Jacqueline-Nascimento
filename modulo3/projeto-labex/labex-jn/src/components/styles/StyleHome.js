import styled from "styled-components";
import { mainColors } from "../../constants/colors";
import fundoHome from "../../assets/fundoHome.jpg"

export const ContainerHome = styled.div`
    display: flex;
    height: 100%;
`

export const ButtonArea = styled.div`
    width: 400px;
`
export const ImageArea = styled.div`
    flex-grow: 1;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-image: url(${fundoHome});
`