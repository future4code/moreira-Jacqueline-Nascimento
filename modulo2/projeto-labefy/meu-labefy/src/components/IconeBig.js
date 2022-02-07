import styled from "styled-components";
import { cores } from "../constants/cores";

export const Container = styled.div`
    height: 40%;
    display: flex;
    align-items: center;
    margin: 10px 0;
    img{
        height: 100%;
    }
    h1{
        color: ${cores.middlePurple};
        margin-left: 10px;
        font-size: 3em;
    }
`

export default function IconeBig(props) {
    return(
        <Container>
            <img src={props.imagem} />
            <h1>{props.texto}</h1>
        </Container>
    )
}