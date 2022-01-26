import React, { Component } from 'react';
import styled from 'styled-components';
import DetalheUsuario from './DetalheUsuario';

const BotaoX = styled.button`
    border: none;
    background-color: #f6b059;
    color: red;
    cursor: pointer;
    margin-left: 2px;
`

const Botao = styled.button`
  margin: 10px;
  border: 1px solid #46535c;
  background-color: #f6b059;
  color: #46535c;
  font-weight: bolder;
  border-radius: 5px;
  cursor: pointer;
  :hover{
    opacity: .8;
  }
`
const Lista = styled.li`
  background-color: #f6b059;
  border-radius: 5px;
  padding: 5px;
  margin: 5px;
  font-size: larger;
`

const ContainerLista = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

export default class ListaUsuarios extends Component {
  state = {
    telaDetalhe: false,
    idUsuario: ''
  }

  irParaDetalhe = (id) =>{
    this.setState({idUsuario: id, telaDetalhe:true})
  }

  onClickVoltar = () =>{
    this.props.funcaoAtualizar()
    this.setState({telaDetalhe:false})
  }

  render() {

    const listaRenderizada = this.props.lista.map((item)=>{
        return (<Lista key={item.id}>
            <span onClick={()=>{this.irParaDetalhe(item.id)}}>{item.name}</span>
            <BotaoX onClick={()=>{this.props.funcaoApagar(item.id)}}>X</BotaoX>
            </Lista>)
    })

    return (
    <div>
        {!this.state.telaDetalhe?
        <div>
          <h3>Procurar usuário</h3>
          <input
          placeholder='Nome exato para busca'
          value={this.props.valueBusca}
          onChange={this.props.funcaoBusca}/>
          <Botao 
          onClick={()=>{this.props.funcaoBuscar(this.props.valueBusca)}}>Buscar</Botao>
          <h3>Lista de Usuários:</h3>
          <ContainerLista>{listaRenderizada}</ContainerLista>
        </div>:
        <DetalheUsuario 
        idUser={this.state.idUsuario}
        funcaoVoltar={this.onClickVoltar}
        funcaoDelete={this.props.funcaoApagar}/>}
    </div>);
  }
}
