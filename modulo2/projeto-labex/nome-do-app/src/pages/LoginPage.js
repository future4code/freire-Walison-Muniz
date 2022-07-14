import React from'react'
import Styled from 'styled-components'


const HomeLoginPage = Styled.div`
    margin: 30px 0px;
    padding: 180px;
    display: flex;
    align-items: center;
    flex-direction: column;

`
const H1 = Styled.div`
    text-align: center;
    font-family: Open-Sans, Helvetica, sans-serif;
    display: block;
    font-size: 2em;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
    color: slategray;
`

const ButtonLoginPage = Styled.div`
    display: flex;
    justify-content: space-around;
    width: 500px;
    margin: 10px 0px;
`
const Form = Styled.div`
    display: flex;
    flex-direction: column;
  
    height: 40px;
    border-radius: 10px;
    border-width: 1px;
    border-color: gray;
    width: 102%;
    margin: 30px 300px 50px;
    margin-left: 0;
   
   

`

function LoginPage() {
    return (
        <HomeLoginPage>
            <div>
                <H1>Login</H1>
            </div>
            <form>
                <Form action="">
                    <input type="text" placeholder="Login" />
                    <input type="text" placeholder="Senha" />
                </Form>
            </form>
            <ButtonLoginPage>
                <button>Voltar</button>
                <button>Entrar</button>
            </ButtonLoginPage>
        </HomeLoginPage>
    )
}
export default LoginPage;