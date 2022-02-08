import { Container, GlobalStyle, Card } from "./components/StyleGeral";
import { useState } from 'react'
import Home from "./pages/Home";

function App() {
  const [page, setPage] = useState("home")

  const changePage = () => {
    switch(page){
      case "home":
        return <Home />
    }
  }

  return (
    <Container>
      <GlobalStyle />
      <Card>
        {changePage()}
      </Card>
    </Container>
  );
}

export default App;
