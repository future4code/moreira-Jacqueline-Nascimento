import React, { Component } from 'react';
import { ContainerDetalhe, ListMusic } from '../components/Styled';
import { addTrackToPlaylist, getPlaylistTracks, removeTrackFromPlaylist } from '../services/integracoes';
import lixo from '../assets/lixo.png';
import { CardMusica } from '../components/CardMusica';

const url = 'https://rr1---sn-hioxu-m52s.googlevideo.com/videoplayback?expire=1643418020&ei=RD30YeSQMK2JvdIPqsqKgAc&ip=154.12.96.125&id=o-AFd2Q6y2bALbT-4GMvb5Wcm40JuQmvMjIAtyIcUQA24o&itag=251&source=youtube&requiressl=yes&vprv=1&mime=audio%2Fwebm&gir=yes&clen=4301657&dur=268.661&lmt=1575239678519279&keepalive=yes&fexp=24001373,24007246&c=ANDROID&txp=5531432&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRAIgBVmw8nja73rvFxJFdPEjk2BpOLXvGW0mySutV51mFU4CICbpRFwe21trQCvVIePO1GPnkyXkqlYK0iruNfoRrPND&title=Carmen%20-%20Habanera%20-%20Lyrics%20(Angela%20Gheorghiu)&redirect_counter=1&rm=sn-5hnelr7e&req_id=217c586b2fdba3ee&cms_redirect=yes&ipbypass=yes&mh=5N&mip=2804:108c:c8db:8386:82e9:e629:12d7:25d&mm=31&mn=sn-hioxu-m52s&ms=au&mt=1643395941&mv=u&mvi=1&pcm2cms=yes&pl=40&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pcm2cms,pl&lsig=AG3C_xAwRgIhANpbC0e5pDdoKd0Bpgd5YyTZEhMZkROfXHkFW5eUMPGRAiEAuwy3sen15cQW6fK7k0si7gvg8-xx5qkDfIBQIA4_QVQ%3D'

export default class DetalhePlaylist extends Component {
    state = {
        listaMusicas: [],
        addMusic: false,
        inputNome: '',
        inputArtist: '',
        inputNumero: '',
        deleteClicado: false,
        addClicado: false,
    }

    componentDidMount(){
        getPlaylistTracks(this.props.id, this.saveLists)
    }

    componentDidUpdate(prevProps, prevState){
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
                        inputNumero: '',
                        addClicado: !this.state.addClicado})
    }

    apagarMusica = (nome, idM, idP) =>{
        removeTrackFromPlaylist(idP, idM, nome)
        this.setState({deleteClicado: !this.state.deleteClicado})
    }

    render() {
        const lista = this.state.listaMusicas.map((item)=>{
            // const url = item.url
            return (<CardMusica apagarMusica={this.apagarMusica} key={item.id} item={item} id={this.props.id} />)
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
