import React, { Component } from 'react';

export default class CadastroUsuario extends Component {
  render() {
    return (
    <div>
        <input
         placeholder='Nome'
         value={this.props.valueNome}
         onChange={this.props.funcaoNome} />
        <input
         placeholder='Email'
         value={this.props.valueEmail}
         onChange={this.props.funcaoEmail} />
        <button onClick={this.props.funcaoClick}>Criar usuário</button>
    </div>);
  }
}
