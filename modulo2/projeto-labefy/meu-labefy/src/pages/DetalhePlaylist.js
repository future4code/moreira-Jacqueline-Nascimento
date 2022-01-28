import React, { Component } from 'react';
import { ContainerDetalhe, ListMusic } from '../components/Styled';
import { addTrackToPlaylist, getPlaylistTracks, removeTrackFromPlaylist } from '../services/integracoes';
import lixo from '../assets/lixo.png'

export default class DetalhePlaylist extends Component {
    state = {
        listaMusicas: [],
        addMusic: false,
        inputNome: '',
        inputArtist: '',
        inputNumero: '',
    }

    componentDidMount(){
        getPlaylistTracks(this.props.id, this.saveLists)
    }

    componentDidUpdate(){
        getPlaylistTracks(this.props.id, this.saveLists)
    }
    
    saveLists= (data) => {
        this.setState({listaMusicas: data})
    }

    onClickAdd = () => {
        this.setState({addMusic: !this.state.addMusic})
    }

    onChangeNome = (e) => {
        this.setState({inputNome: e.target.value})
    }

    onChangeArtist = (e) => {
        this.setState({inputArtist: e.target.value})
    }

    onChangeNumero = (e) => {
        this.setState({inputNumero: e.target.value})
    }

    addMusica = () => {
        addTrackToPlaylist(this.state.inputNome, this.state.inputArtist, this.state.inputNumero, this.props.id)
        this.setState({inputNome: '',
                        inputArtist: '',
                        inputNumero: '',})
    }

    apagarMusica = (nome, idM, idP) =>{
        removeTrackFromPlaylist(idP, idM, nome)
    }

    render() {
        const lista = this.state.listaMusicas.map((item)=>{
            return (<ListMusic key={item.id}>
                <div><h2>{item.name}</h2><h3>{item.artist}</h3></div>
                <button onClick={()=>this.apagarMusica(item.name,item.id,this.props.id)}>
                    <img src={lixo} />
                </button>
                <audio controls><source src={item.url}/></audio>
                </ListMusic>)
        })
        return (
        <ContainerDetalhe>
            <h1>Playlist {this.props.name} </h1>
            <button onClick={this.onClickAdd} >Adicionar Música</button>
            {this.state.addMusic && 
            <div>
                <input placeholder='Nome' value={this.state.inputNome} onChange={this.onChangeNome} />
                <input placeholder='Artista' value={this.state.inputArtist} onChange={this.onChangeArtist} />
                <input placeholder='Nº da música/1 a 100' value={this.state.inputNumero} onChange={this.onChangeNumero} />
                <button onClick={this.addMusica} >Add</button>
            </div>}
            {lista}
        </ContainerDetalhe>);
    }
}
