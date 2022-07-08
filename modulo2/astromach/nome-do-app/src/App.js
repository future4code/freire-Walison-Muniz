import React, { useState } from 'react';
import Styled from 'styled-components';
import Logo from './assets/Logo.png';
import Icone from './assets/Icone.png'
//import axios from "axios";

const MeuApp = Styled.div`
 height: 100%; 
  background-color: #c5c5b5;

  
`
const Home = Styled.div` 
  background-color: #faf6f6;
  
`
const TituloHome = Styled.div`
`
const BotoesHome = Styled.div`

`
const ImgTitulo = Styled.div`
   
`
const ImgIcone = Styled.div`
 
`

function App() {

  const [like, setLike] = useState([])
  const [deslike, setDeslike] = useState("")

  const salvaLike = (event) => {
    setLike(event)
    console.log(event)
  }
  const salvaDeslike = (event) => {
    setDeslike(event)
  }
  return (
    <MeuApp>
      <Home>
        <TituloHome>
          <ImgTitulo>
            <img src={Logo} alt="titulo" />
          </ImgTitulo>
          <ImgIcone>
          </ImgIcone>
        </TituloHome>
        <hr />
        <BotoesHome>
          <button onClick={setLike}> X </button>
          <button onClick={setDeslike}> ♥️ </button>
        </BotoesHome>
      </Home>
    </MeuApp>
  );
}

export default App;
