import React from "react";
import styled from "styled-components";
import Post from "./components/Post/Post";
import Post1 from './components/Post/Post1'
import Post2 from './components/Post/Post2';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

function App() {
  return (
    <MainContainer>
      <Post
        nomeUsuario={"paulinha"}
        fotoUsuario={"https://picsum.photos/50/50"}
        fotoPost={"https://picsum.photos/200/150"}
      />
      <Post1
          nomeUsuario={'joao'}
          fotoUsuario={'https://picsum.photos/50/51'}
          fotoPost={'https://picsum.photos/200/151'}
        />
        <Post2
          nomeUsuario={'amanda'}
          fotoUsuario={'https://picsum.photos/50/52'}
          fotoPost={'https://picsum.photos/200/152'}
        />
    </MainContainer>
  );
}

export default App;
