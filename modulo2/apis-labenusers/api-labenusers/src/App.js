import React, { Component } from 'react';
import CadastroUsuario from './components/CadastroUsuario';
import ListaUsuarios from './components/ListaUsuarios';
import axios from 'axios'

const urlUsers = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'
const headers = {
  Authorization: "jacqueline-nascimento-moreira"
}

export default class App extends Component {
  state = {
    trocaDeTela: true,
    inputNome: "",
    inputEmail: "",
    lista: [],
    inputBusca: ""
  }
  trocarDeTela = ()=>{
    this.setState({trocaDeTela: !this.state.trocaDeTela})
    this.getAllUsers()
  }
  onChangeNome = (event) => {
    this.setState({inputNome: event.target.value})
  }
  onChangeEmail = (event) => {
    this.setState({inputEmail: event.target.value})
  }
  onChangeBusca = (event) => {
    this.setState({inputBusca: event.target.value})
  }
  getAllUsers = () => {
    axios.get(urlUsers, {headers})
    .then((res)=>{
      this.setState({lista: res.data})
    })
    .catch((err)=>{
      alert("Erro ao pegar lista de usuários")
    })
  }

  createUser = () => {
    const body = {
      "name": this.state.inputNome,
      "email": this.state.inputEmail
    }
    axios.post(urlUsers,body,{headers})
    .then((res)=>{
      alert(`O usuário ${this.state.inputNome} foi adicionado`)
      this.getAllUsers()
      this.setState({inputNome: "", inputEmail:""})
    })
    .catch((err)=>{
      alert(`Erro ao criar o usuário: \n ${err.response.data.message}`)
    })
  }
  deleteUser = (id) =>{
    const urlUserId = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
    if (window.confirm("Tem certeza que deseja apagar o usuário?")){
      axios.delete(urlUserId, {headers})
      .then((res)=>{
        this.getAllUsers()
        alert(`Usuário apagado com sucesso`)
      })
      .catch((err)=>{
        alert(`Erro ao deletar o usuário: \n ${err.response.data.message}`)
      })
    }
  }

  searchUser = (nome) =>{
    const urlSearch = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/search?name=${nome}`
    axios.get(urlSearch, {headers})
    .then((res)=>{
      if (res.data.length !== 0){
      this.setState({inputBusca: '', lista: res.data})
      }else{
        alert(`Nenhum usuário com este nome`)
        this.setState({inputBusca: ''})
      }
    })
    .catch((err)=>{
      alert(`Erro ao buscar o usuário: \n ${err.response.data.message}`)
    })
  }

  componentDidMount() {
    this.getAllUsers();
  }

  render() {
    const tela = () =>{
      if (this.state.trocaDeTela){
        return (
        <CadastroUsuario
        funcaoNome={this.onChangeNome}
        funcaoEmail={this.onChangeEmail}
        valueNome={this.state.inputNome}
        valueEmail={this.state.inputEmail}
        funcaoClick={this.createUser} />)
      }else{
        return (
        <ListaUsuarios
          lista={this.state.lista}
          funcaoApagar={this.deleteUser}
          funcaoBuscar={this.searchUser}
          funcaoBusca={this.onChangeBusca}
          valueBusca={this.state.inputBusca} />)
      }
    }

    return (
    <div>
      <button onClick={this.trocarDeTela}>Trocar de Tela</button>
      {tela()}
    </div>);
  }
}
