import styled from "styled-components";
import {cores} from "../constants/cores";

// Página Principal
export const Container = styled.div`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    justify-content: space-between;
    background-color: ${cores.mindnightBlue};
`
export const PagesArea = styled.div`
    flex-grow: 1;
    h1{
        color: ${cores.bone};
        margin: 40px auto;
    }
`

//Página Home
export const ContainerHome = styled.div`
    flex-grow: 1;
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const ListArea = styled.div`
    display: flex;
    flex-wrap: wrap;
`

//Header
export const ContainerHeader = styled.div`
    width: 100vw;
    height: 150px;
    background-color: ${cores.richBlack};
    color: white;
    padding-left: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    img{
        height: 50%;
    }
`

export const DivHeader = styled.div`
    display: flex;
`

//Página DetalhePlaylist
export const ContainerDetalhe = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    button{
        height: 25px;
        background-color: ${cores.teaGreen3};
        border: 1px solid white;
        border-radius: 5px;
        margin: 10px;
        color: ${cores.mindnightBlue};
        min-width: 40px;
        padding: 0 2px;
    }
    input {
        height: 25px;
        margin: 2px;
    }
    audio{
        height: 30px;
        margin: 10px;
    }
`
export const ListMusic = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid white;
    border-top: 1px solid white;
    width: 100vw;
    img{
        height: 100%;
    }
    h2{
        color: ${cores.puce};
        margin-right: 5px;
    }
    h3{
        color: ${cores.tuscany};
        margin-right: 5px;
    }
`

//Página BuscarPlaylist
export const ContainerBusca = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    input {
        height: 25px;
        margin: 2px;
    }
`

//Página CreatePlaylist

export const ContainerCriar = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    button{
        height: 25px;
        background-color: ${cores.teaGreen3};
        border: 1px solid white;
        border-radius: 5px;
        margin: 10px;
        color: ${cores.mindnightBlue};
        min-width: 40px;
        padding: 0 2px;
    }
    input {
        height: 25px;
        margin: 2px;
    }
`