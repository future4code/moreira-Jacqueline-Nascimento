import React, { Component } from 'react';
import { deletePlaylist, getAllPlaylists } from '../services/integracoes';
import {CardPlaylist} from '../components/CardPlaylist';
import { ContainerHome, ListArea } from '../components/Styled';

export default class Home extends Component {
    state = {
        playlists : []
    }

    componentDidMount(){
        getAllPlaylists(this.savePlaylists)
    }
    componentDidUpdate(){
        getAllPlaylists(this.savePlaylists)
    }

    savePlaylists = (data) => {
        this.setState({playlists: data})
    }

    apagarPlaylist = (nome, id) =>{
        deletePlaylist(nome, id)
    }

    render() {
        const lista = this.state.playlists.map((item)=>{
            return (<CardPlaylist 
                    key={item.id} 
                    irParaDetalhes={this.props.irParaDetalhes} 
                    chave={item.id} 
                    nome={item.name}
                    apagarPlaylist={this.apagarPlaylist}/>)
        })

        return (
        <ContainerHome>
            <h1>Playlists</h1>
            <ListArea>{lista}</ListArea>
            
        </ContainerHome>);
    }
}
