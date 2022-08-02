import React from 'react'
import Styled from 'styled-components'


const Container = Styled.div`

`
const Titulo = Styled.div`


`
const Box = Styled.div`

display: flex;
flex-direction: column;


`
let name = ""
let age = ""
let email = ""
let select = ""

const inputName = (event) => {
  name = (event.target.value)
}

const inputAge = (event) => {
  age = (event.target.value)
}
  const inputEmail = (event) => {
    email = (event.target.value)
  }

  const inputSelect = (event) => {
    select = (event.target.value)
  }


  function App() {
    return (
      <Container>
        <Titulo><h1><b>DADOS GERAIS</b></h1></Titulo>
        <Box>1.Qual seu nome?
          <input onClick={inputName} type="text" placeholder='' value='' />
        </Box>
        <Box>2.Qual sua idade?
          <input onClick={inputAge} type="text" placeholder='' value='' />
        </Box>
        <Box>3.Qual seu e-mail?
          <input onClick={inputEmail} type="text" placeholder='' value='' />
        </Box>
        <Box>4.Qual a sua escolaridade?
          <select>
            <option onChange={inputSelect} value="Ensino Médio">Ensino Médio</option>
            <option onChange={inputSelect} value="Ensino Superior">Ensino Superior</option>
          </select>
        </Box>
      </Container>
    );
  }

  export default App;
