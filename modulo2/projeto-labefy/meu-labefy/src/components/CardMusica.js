import styled from "styled-components";
import lixo from '../assets/lixo.png';
import {cores} from '../constants/cores'


const ListMusic = styled.div`
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

export const CardMusica = (props) => {
    return (
    <ListMusic>
        <div><h2>{props.item.name}</h2><h3>{props.item.artist}</h3></div>
        <button onClick={()=>props.apagarMusica(props.item.name,props.item.id,props.id)}>
            <img src={lixo} />
        </button>
        {props.item.url&&<audio controls src={props.item.url} />}
    </ListMusic>)
}