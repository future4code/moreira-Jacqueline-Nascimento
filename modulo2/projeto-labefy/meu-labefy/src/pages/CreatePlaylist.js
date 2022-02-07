import React, { Component } from 'react';
import { ContainerCriar } from '../components/Styled';
import { createPlaylist } from '../services/integracoes';

export default class CreatePlaylist extends Component {
    state = {
        inputNome: ''
    }

    onChangeNome = (event) =>{
        this.setState({inputNome: event.target.value})
    }

    onClickButton = () =>{
        this.setState({inputNome: ''})
        createPlaylist(this.state.inputNome)
    }

    render() {
        return (
        <ContainerCriar>
            <h1>Adicione sua Playlist</h1>
            <input placeholder='Nome da Playlist' value={this.state.inputNome} onChange={this.onChangeNome} />
            <button onClick={this.onClickButton} >Criar</button>
        </ContainerCriar>);
    }
}
