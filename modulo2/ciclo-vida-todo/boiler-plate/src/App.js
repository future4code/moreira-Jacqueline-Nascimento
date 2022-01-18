import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  border: 1px solid black;
  border-radius: 20px;
  margin: 10px auto;
  background-color: lavender;
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
  margin-bottom: 10px;
`
const ListaContainer = styled.ul`
  padding: 0;
  width: 200px;
`
const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa})=>(completa ? 'line-through' : 'none')};
`
const Botao = styled.button`
  border-radius: 5px;
  cursor: pointer;
  background-color: lavenderblush;
`

class App extends React.Component {
  state = {
    tarefas: [],
    inputTexto: '',
    filtro: '',
  }

  onChangeTarefa = (event) => {
    this.setState({inputTexto: event.target.value})
  }

  adicionarTarefa = () => {
    const novaTarefa = {
      id: Date.now(),
      texto: this.state.inputTexto,
      completa: false
    }

    const listaAtualizada = [...this.state.tarefas, novaTarefa]
    this.setState({tarefas: listaAtualizada, inputTexto:''})
  }

  mudarTarefa = (id) =>{
    const novaLista = this.state.tarefas.map((item)=>{
      if (item.id === id){
        return {...item, completa: !item.completa}
      }else{
        return item
      }
    })

    this.setState({tarefas: novaLista})
  }

  onChangeFiltro = (event) => {
    this.setState({filtro: event.target.value})
  }

  componentDidUpdate() {
    localStorage.setItem("listaDeTarefas", JSON.stringify(this.state.tarefas))
  };

  componentDidMount() {
    const tarefas = localStorage.getItem("listaDeTarefas")
    this.setState({tarefas: JSON.parse(tarefas) || []})
  };

  render(){
    const listaFiltrada = this.state.tarefas.filter((item)=>{
      switch (this.state.filtro){
        case 'pendentes':
          return !item.completa;
        case 'completas':
          return item.completa;
        default: return true
      }
    })

    const renderizarTarefas = listaFiltrada.map(item => {
      return <Tarefa
      completa={item.completa}
      onClick={()=>{this.mudarTarefa(item.id)}} >{item.texto}</Tarefa>
    })


    return (
      <Container>
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputTexto} onChange={this.onChangeTarefa}/>
          <Botao onClick={this.adicionarTarefa}>Adicionar</Botao>
        </InputsContainer>
        <InputsContainer>
          <label htmlFor="">Filtro</label>
          <select value={this.state.filtro} onChange={this.onChangeFiltro}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <ListaContainer>{renderizarTarefas}</ListaContainer>
      </Container>
    );
  }
}

export default App;
