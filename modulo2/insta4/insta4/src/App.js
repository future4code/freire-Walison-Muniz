import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post'
import post1 from './img/post 1.jpg'
import post2 from './img/post 2.jpg'
import post3 from './img/post 3.jpg'



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
        nomeUsuario={'Paulinha'}
        fotoUsuario={'https://picsum.photos/50/50'}
        fotoPost={post1}
        />
        <Post
        nomeUsuario={'Aline'}
        fotoUsuario={'https://picsum.photos/50/50'}
        fotoPost={post2}
        />
        <Post
        nomeUsuario={'Jonatas'}
        fotoUsuario={'https://picsum.photos/50/50'}
        fotoPost={post3}
        />
      </MainContainer>
    );
  }
}

export default App;
