import axios from 'axios';
import React, { Component } from 'react';
import styled from 'styled-components';


const headers = {
    Authorization: "jacqueline-nascimento-moreira"
}

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

export default class DetalheUsuario extends Component {
    state = {
        objeto: {},
        inputNome: '',
        inputEmail: '',
        trocarTela: true
    }


    getUserById = async(id) => {
        const urlId = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
        try{
            const response = await axios.get(urlId, {headers})
            this.setState({objeto: response.data})
        } catch(err){
            alert(`Erro ao pegar usuário: \n ${err.response.data.message}`)
        }
    }

    editUser = async(id) =>{
        const urlId = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
        const body = {
            "name": this.state.inputNome,
            "email": this.state.inputEmail
        }
        try{
            const response = await axios.put(urlId, body, {headers})
            alert(`Usuário alterado com sucesso`)
        } catch(err){
            alert(`Erro ao pegar usuário: \n ${err.response.data.message}`)
        }
    }

    botaoDelete = () =>{
        this.props.funcaoDelete(this.state.objeto.id)
        this.props.funcaoVoltar()
    }

    componentDidMount() {
        this.getUserById(this.props.idUser)
    }

    onChangeNome = (e) =>{
        this.setState({inputNome: e.target.value})
    }

    onChangeEmail = (e) =>{
        this.setState({inputEmail: e.target.value})
    }

    clickEditar = ()=>{
        this.setState({inputNome: this.state.objeto.name,
            inputEmail: this.state.objeto.email})
        this.setState({trocarTela: false})
    }

    clickSalvar = ()=>{
        this.editUser(this.props.idUser)
        this.getUserById(this.props.idUser)
        this.setState({trocarTela: true})
    }

  render() {
    return (
    <div>
        {this.state.trocarTela?
        <div>
            <h4>Nome:</h4>
            <p>{this.state.objeto.name}</p>
            <h4>Email:</h4>
            <p>{this.state.objeto.email}</p>
            <Botao onClick={this.clickEditar}>Editar</Botao>
            <Botao onClick={this.botaoDelete}>Deletar Usuário</Botao>
            <Botao onClick={this.props.funcaoVoltar}>Voltar</Botao>
        </div>:
        <div>
            <input placeholder='Nome' value={this.state.inputNome} onChange={this.onChangeNome} />
            <input placeholder='Email' value={this.state.inputEmail} onChange={this.onChangeEmail} />
            <Botao onClick={this.clickSalvar}>Salvar</Botao>
        </div>}
        
    </div>);
  }
}
