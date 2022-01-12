import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import { Header } from './components/Header';
import ImagemButton from './components/ImagemButton/ImagemButton';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C4D03AQEYBks89WyEPQ/profile-displayphoto-shrink_800_800/0/1558633662161?e=1647475200&v=beta&t=2hnZBM-tW57Kopwzfj32a7leBy-kLmYySa3rLwebhE4" 
          nome="Jacqueline Nascimento" 
          descricao="Oi, eu sou a Jacqueline. Sou Desenvolvedora Web em treinamento pela Labenu. Tenho graduação em Engenharia Civil e atualmente estou cursando o doutorado na área de estruturas pela UFPE."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />

        <CardPequeno
          imagem="https://i.pinimg.com/736x/23/a6/c4/23a6c4bd7a6ee8c84dcd809915c2fc59.jpg"
          nome="Email:"
          descricao="jacqueline.cmessias@gmail.com"
        />

        <CardPequeno
          imagem="https://i.pinimg.com/736x/f0/c7/b9/f0c7b9489446715cae72085a470f0ed9.jpg"
          nome="Endereço:"
          descricao="Av. Brasil, 292. Recife-Pe."
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://uploads-ssl.webflow.com/5e790d30d198385b09366d8f/5eab0f1225c2d474a92656df_fav2_LabeNu_.png"
          nome="LABENU"
          descricao="Inserção no mundo de Desenvolvimento Web!" 
        />
        
        <CardGrande 
          imagem="https://upload.wikimedia.org/wikipedia/commons/a/ae/Logo-ufpe-2-2.jpg" 
          nome="UFPE" 
          descricao="Pesquisadora de Doutorado." 
        />
      </div>

      <div className="page-section-container">
        <h2>Competências</h2>
        <CardPequeno 
          imagem="https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png" 
          nome="Python" 
        />        

        <CardPequeno 
          imagem="https://pcodinomebzero.neocities.org/Imagens/javascript1.png" 
          nome="JavaScript" 
        />

        <CardPequeno 
          imagem="https://cdn0.iconfinder.com/data/icons/social-network-7/50/22-512.png" 
          nome="HTML" 
        />

        <CardPequeno 
          imagem="https://cdn-icons-png.flaticon.com/512/919/919826.png" 
          nome="CSS" 
        />

        <CardPequeno 
          imagem="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png" 
          nome="React" 
        />   
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
