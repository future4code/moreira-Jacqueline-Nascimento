import axios from "axios";
import {UrlBase} from '../constants/UrlBase'

const headers = {
    Authorization: "jacqueline-nascimento-moreira"
  }

export const getAllPlaylists = (funcao)=>{
    axios.get(UrlBase, {headers})
    .then((res)=>{funcao(res.data.result.list)})
    .catch((err)=>{alert(`Erro ao pegar todas as playlists: \n ${err.response.data.message}`)})
}

export const getPlaylistTracks = (id, funcao)=>{
    const urlId = `${UrlBase}/${id}/tracks`

    axios.get(urlId, {headers})
    .then((res)=>{funcao(res.data.result.tracks)})
    .catch((err)=>{alert(`Erro ao pegar músicas: \n ${err.response.data.message}`)})
}

export const createPlaylist = (nome)=>{
    const body = {
        "name": nome
    }
    axios.post(UrlBase, body, {headers})
    .then((res)=>{alert(`Playlist ${nome} criada com sucesso`)})
    .catch((err)=>{alert(`Erro ao criar playlist: \n ${err.response.data.message}`)})
}

export const deletePlaylist = (nome, id) =>{
    const urlId = `${UrlBase}/${id}`
    if (window.confirm(`Tem certeza que deseja apagar a playlist ${nome}?`)){
        axios.delete(urlId, {headers})
        .then((res)=>{alert(`Playlist ${nome} apagada`)})
        .catch((err)=>{alert(`Erro ao deletar playlist: \n ${err.response.data.message}`)})
    }
}

export const addTrackToPlaylist = (nome, artista, numero, id) =>{
    const urlId = `${UrlBase}/${id}/tracks`
    const urlMusic = `http://spoti4.future4.com.br/${numero}.mp3`
    const body = {
        "name": nome, 
        "artist": artista,
        "url": urlMusic
    }
    axios.post(urlId, body, {headers})
    .then((res)=>{alert(`Música ${nome} adicionada`)})
    .catch((err)=>{alert(`Erro ao adicionar música: \n ${err.response.data.message}`)})
}

export const searchPlaylist = (nome, funcao) => {
    const urlNome = `${UrlBase}/search?name=${nome}`
    axios.get(urlNome, {headers})
    .then((res)=>{funcao(res.data.result.playlist)})
    .catch((err)=>{console.log(`Erro ao procurar playlist: \n ${err.response.data.message}`)})
}

export const removeTrackFromPlaylist = (idPlaylist, idMusica, nome) =>{
    const url = `${UrlBase}/${idPlaylist}/tracks/${idMusica}`
    if (window.confirm(`Tem certeza que deseja apagar a múscia ${nome}?`)){
        axios.delete(url, {headers})
        .then((res)=>{alert(`Música ${nome} apagada`)})
        .catch((err)=>{alert(`Erro ao remover música: \n ${err.response.data.message}`)})
    }
}