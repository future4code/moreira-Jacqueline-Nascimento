import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
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
        />
      </MainContainer>
    );
  }
}

export default App;
