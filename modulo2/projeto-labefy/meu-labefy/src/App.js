import React, { Component } from 'react';
import Header from './components/Header';
import DetalhePlaylist from './pages/DetalhePlaylist';
import Home from './pages/Home';
import { Container, PagesArea } from './components/Styled';
import GlobalStyle from "./components/global";
import CreatePlaylist from './pages/CreatePlaylist';
import BuscarPlaylist from './pages/BuscarPlaylist';

export default class App extends Component {
  state = {
    tela: 'home',
    id: '',
    name: ''
  }

  irParaHome = () =>{
    this.setState({tela: "home"})
  }

  irParaDetalhes = (listName, listId) =>{
    this.setState({id: listId, name: listName})
    this.setState({tela: "detalhe"})
  }

  irParaCriar = () =>{
    this.setState({tela: "criar"})
  }

  irParaHome = () =>{
    this.setState({tela: "home"})
  }

  irParaPesquisa = () =>{
    this.setState({tela: "pesquisa"})
  }

  render() {
    const tela = ()=>{ 
      switch(this.state.tela){
        case "home":
          return <Home irParaDetalhes={this.irParaDetalhes}/>
        case "detalhe":
          return <DetalhePlaylist id={this.state.id} name={this.state.name} />
        case "criar":
          return <CreatePlaylist />
        case "pesquisa":
          return <BuscarPlaylist irParaDetalhes={this.irParaDetalhes}/>
        default:
          return <Home />
      }
    }

    return (
    <Container>
      <GlobalStyle />
      <Header 
      irParaCriar={this.irParaCriar} 
      irParaHome={this.irParaHome} 
      irParaPesquisa={this.irParaPesquisa} />
      <PagesArea>{tela()}</PagesArea>
    </Container>);
  }
}
