import React, { Component } from 'react';
import styled from 'styled-components';

const Botao = styled.button`
    border: none;
    background-color: white;
    color: red;
    cursor: pointer;
`

export default class ListaUsuarios extends Component {
  render() {

    const listaRenderizada = this.props.lista.map((item)=>{
        return (<li key={item.id}>
            {item.name}
            <Botao onClick={()=>{this.props.funcaoApagar(item.id)}}>X</Botao>
            </li>)
    })

    return (
    <div>
        <ul>{listaRenderizada}</ul>
        <h3>Procurar usuário</h3>
        <input
        placeholder='Nome exato para busca'
        value={this.props.valueBusca}
        onChange={this.props.funcaoBusca}/>
        <button 
        onClick={()=>{this.props.funcaoBuscar(this.props.valueBusca)}}>Buscar</button>
    </div>);
  }
}
