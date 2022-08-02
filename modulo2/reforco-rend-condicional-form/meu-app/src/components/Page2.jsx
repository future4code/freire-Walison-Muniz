import React from 'react'

function Page2() {
  return (
    <Container>
      <Titulo><h1><b>INFORMAÇÕES GERAIS DO ENSINO</b></h1></Titulo>
      <Box>7. Porquê você não terminou o curso de graduação?
        <input onClick={inputCurse} type="text" placeholder='' />
      </Box>
      <Box>8.Você fez algum curso complementar?
        <select>
        <option value="Sim">Sim</option>
          <option value="Não">Não</option>
        </select>
      </Box>
    </Container>
  );
}

export default Page2;