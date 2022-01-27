import React, { Component } from 'react';
import styled from 'styled-components';

const ContainerInputs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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

export default class CadastroUsuario extends Component {
  render() {
    return (
    <ContainerInputs>
        <h3>Cadastre um novo usuário:</h3>
        <input
        placeholder='Nome'
        value={this.props.valueNome}
        onChange={this.props.funcaoNome} />
        <input
        placeholder='Email'
        value={this.props.valueEmail}
        onChange={this.props.funcaoEmail} />
        <Botao onClick={this.props.funcaoClick}>Criar usuário</Botao>
    </ContainerInputs>);
  }
}
