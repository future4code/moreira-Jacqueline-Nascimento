import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const NewPostConatiner = styled.div`
  display: flex;
  border: 1px solid orange;
  border-radius: 5px;
  margin: 10px;
  padding: 10px;
  width: 280px;
  justify-content: space-between;
  background-color: lightyellow;
  align-items: center;
`
const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
`
const IpuntStyle = styled.input`
  margin: 2px;
`
const BotaoPost = styled.button`
  background-color: orange;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  :hover{
    opacity: .5;
  }
`

class App extends React.Component {
  state = {
    posts: [
      {
        nomeUsuario: 'paulinha',
        fotoUsuario: 'https://picsum.photos/50/50',
        fotoPost: 'https://picsum.photos/200/150'
      },
      {
        nomeUsuario: 'jacqueline',
        fotoUsuario: 'https://picsum.photos/id/152/3888/2592',
        fotoPost: 'https://picsum.photos/id/129/4910/3252'
      },
      {
        nomeUsuario: 'nanda',
        fotoUsuario: 'https://picsum.photos/id/1027/2848/4272',
        fotoPost: 'https://picsum.photos/id/1011/5472/3648'
      }
    ],
    inputNomeUsuario: "",
    inputFotoUsuario: "",
    inputFotoPost: ""
  }

  adicionarPost = () => {
    const novoPost = {
      nomeUsuario: this.state.inputNomeUsuario,
      fotoUsuario: this.state.inputFotoUsuario,
      fotoPost: this.state.inputFotoPost
    };

    const novaLista = [...this.state.posts, novoPost];
    this.setState({posts: novaLista})
    this.setState({inputNomeUsuario:""})
    this.setState({inputFotoUsuario:""})
    this.setState({inputFotoPost:""})
  }

  onChangeInputNome = (event) => {
    this.setState({inputNomeUsuario: event.target.value})
  }
  onChangeInputFotoUsuario = (event) => {
    this.setState({inputFotoUsuario: event.target.value})
  }
  onChangeInputFotoPost = (event) => {
    this.setState({inputFotoPost: event.target.value})
  }

  render() {
    const listaDePosts = this.state.posts.map((item)=>{return(
      <Post
        nomeUsuario={item.nomeUsuario}
        fotoUsuario={item.fotoUsuario}
        fotoPost={item.fotoPost}
      />
    ) })


    return (
      <MainContainer>
        <NewPostConatiner>
          <InputsContainer>
            <IpuntStyle
            value={this.state.inputNomeUsuario}
            onChange={this.onChangeInputNome}
            placeholder='Nome do Usuário' />
            <IpuntStyle
            value={this.state.inputFotoUsuario}
            onChange={this.onChangeInputFotoUsuario}
            placeholder='Link da foto do Usuário' />
            <IpuntStyle
            value={this.state.inputFotoPost}
            onChange={this.onChangeInputFotoPost}
            placeholder='Link da foto do Post' />
          </InputsContainer>
          <BotaoPost onClick={this.adicionarPost} >Postar</BotaoPost>
        </NewPostConatiner>
        {/* <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
        <Post
          nomeUsuario={'jacqueline'}
          fotoUsuario={'https://picsum.photos/id/152/3888/2592'}
          fotoPost={'https://picsum.photos/id/129/4910/3252'}
        />
        <Post
          nomeUsuario={'nanda'}
          fotoUsuario={'https://picsum.photos/id/1027/2848/4272'}
          fotoPost={'https://picsum.photos/id/1011/5472/3648'}
        /> */}
        {listaDePosts}
      </MainContainer>
    );
  }
}

export default App;
