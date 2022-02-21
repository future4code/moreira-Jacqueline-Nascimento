import styled, { createGlobalStyle } from "styled-components";
import { mainColors } from "../../constants/colors";

export const ContainerHeader = styled.div`
    width: 100%;
    background-image: linear-gradient(to bottom left, ${mainColors.azul}, ${mainColors.rosa});
    margin-bottom: 20px;
`
export const Title = styled.h1`
    padding: 20px;
    color: ${mainColors.fundo};
`