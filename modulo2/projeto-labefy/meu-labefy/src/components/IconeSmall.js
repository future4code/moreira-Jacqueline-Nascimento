import styled from "styled-components";
import { cores } from "../constants/cores";

export const Container = styled.button`
    background-color: ${cores.richBlack};
    border: none;
    height: 30px;
    display: flex;
    margin: 10px;
    color: ${cores.tuscany};
    img{
        height: 100%;
        margin-right: 5px;
    }
    :hover{
        color: ${cores.puce};
    }
`

export default function IconeSmall(props) {
    return(
        <Container onClick={props.onClickF}>
            <img src={props.imagem} />
            <h2>{props.texto}</h2>
        </Container>
    )
}