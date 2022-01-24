import styled from 'styled-components';
import CampoDeMensagens from './components/CampoDeMensagens';
import imagemDeFundo from './img/fundo.jpg'

const Container = styled.div`
  box-sizing: border-box;
  border: 1px solid black;
  width: 600px;
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  align-items: flex-end;
  background-image: url(${imagemDeFundo});
`

function App() {
  return (
    <Container>
      <CampoDeMensagens/>
    </Container>
  );
}

export default App;
