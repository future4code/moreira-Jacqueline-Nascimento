import React, { Component } from 'react';
import { deletePlaylist, searchPlaylist } from '../services/integracoes';
import { CardPlaylist } from '../components/CardPlaylist';
import { ListArea, ContainerBusca } from '../components/Styled';

export default class BuscarPlaylist extends Component {
    state = {
        inputNome: '',
        lista: []
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.inputNome !== this.state.inputNome){
            searchPlaylist(this.state.inputNome, this.saveLists)
        }
    }

    saveLists= (data) => {
        this.setState({lista: data})
    }

    onChangeNome = (e) => {
        this.setState({inputNome: e.target.value})
    }

    apagarPlaylist = (nome, id) =>{
        deletePlaylist(nome, id)
    }

    render() {
        const listaRenderizada = this.state.lista.map((item)=>{
            return (<CardPlaylist 
                    key={item.id} 
                    irParaDetalhes={this.props.irParaDetalhes} 
                    chave={item.id} 
                    nome={item.name}
                    apagarPlaylist={this.apagarPlaylist}/>)
        })
        return (
        <ContainerBusca>
            <h1>Buscar Playlists</h1>
            <input value={this.state.inputNome} onChange={this.onChangeNome} />
            <ListArea>{this.state.inputNome&&listaRenderizada}</ListArea> 
        </ContainerBusca>);
    }
}
