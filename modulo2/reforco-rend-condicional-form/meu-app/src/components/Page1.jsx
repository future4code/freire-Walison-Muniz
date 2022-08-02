import React from 'react'

function Page1() {
  return (
    <Container>
      <Titulo><h1><b>INFORMAÇÕES DO ENSINO SUPERIOR</b></h1></Titulo>
      <Box>5.Qual Curso?
        <input onClick={inputCurse} type="text" placeholder='' />
      </Box>
      <Box>6.Qual unidade de ensino?
        <input onClick={inputColege} type="text" placeholder='' />
      </Box>
    </Container>
  );
}

export default Page1;