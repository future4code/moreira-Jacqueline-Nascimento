import styled from "styled-components";
import { cores } from "../constants/cores";
import iconePlay from '../assets/play.png';
import lixo from '../assets/lixo.png'

const Container = styled.div`
    border: 1px solid white;
    background-color: ${cores.teaGreen1};
    display: flex;
    height: 50px;
    width: 200px;
    border-radius: 5px;
    justify-content: space-between;
    margin: 10px;
    padding: 0 5px;
    img {
        box-sizing: border-box;
        height: 80%;
        border-radius: 50px;
        background-color: ${cores.bone};
        :hover{
            -webkit-transform: scale(1.9);
            transform: scale(1.1);
        }
    }
    button{
        background-color: ${cores.teaGreen1};
        border: none;
    }
    h3 {
        align-self: center;
        color: ${cores.puce};
    }
    div{
        display: flex;
    }
`

export const CardPlaylist = (props) =>{
    return(
        <Container>
            <h3>{props.nome}</h3>
            <div>
            <button onClick={()=>{props.apagarPlaylist(props.nome,props.chave)}}><img src={lixo} /></button>
            <button onClick={()=>{props.irParaDetalhes(props.nome,props.chave)}}><img src={iconePlay} /></button>
            </div>
        </Container>
    )
}