import React from 'react';
import './App.css';
import Etapa1 from './components/Etapa1';
import Etapa2 from './components/Etapa2';
import Etapa3 from './components/Etapa3';
import EtapaFinal from './components/EtapaFinal';
import styled from 'styled-components'


const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  justify-content: center;
  align-items: center;
  margin: 5px;
  padding-bottom: 5px;
`

class App extends React.Component {
  state = {
    etapa: 1
  }

  MudarEtapa = () => {
    this.setState({etapa: this.state.etapa+1})
  }

  render(){
    const renderizarTela = () => {
      switch(this.state.etapa){
        case 1: return <Etapa1/>;
        case 2: return <Etapa2/>;
        case 3: return <Etapa3/>;
        case 4: return <EtapaFinal/>;
        default: return <Etapa1/>;
      }
    }

    return (
    <Container>
      {renderizarTela()}
      {this.state.etapa !==4 && <button onClick={this.MudarEtapa}>Próxima Etapa</button>}
    </Container>
    );
  }
}

export default App;
