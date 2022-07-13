import React from 'react';
import Styled from 'styled-components';

const HomeAdminHomePage = Styled.div`
    display: flex;
    flex-direction: column;    
    align-items: center;
`

const TittleAdminHomePage = Styled.div`
    text-align: center;
    font-family: Open-Sans, Helvetica, sans-serif;
    display: block;
    font-size: 2em;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    color: slategray;
    font-weight: bold;
`

const ButtonsAdminHomePage = Styled.div`
    display: flex;
    justify-content: space-around;
    width: 500px;
    margin: 10px 0px;
`

const Card= Styled.div`
    display: flex;
    box-shadow: rgb(0 0 0 / 30%) 0px 4px 8px 0px;
    padding: 10px 20px;
    border-radius: 4px;
    margin: 10px 0px;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    width: 460px;
`

function AdminHomePage () {
    return (
        <HomeAdminHomePage>
            <TittleAdminHomePage>
                <h1>Painel Administrativo</h1>
            </TittleAdminHomePage>
            <ButtonsAdminHomePage>
                <button>Voltar</button>
                <button>Criar Viagem</button>
                <button>Logout</button>
            </ButtonsAdminHomePage>
            <Card>
                viagem 
            </Card>
            <Card>
                viagem 
            </Card>
            <Card>
                viagem 
            </Card>
            <Card>
                viagem 
            </Card>
            <Card>
                viagem 
            </Card>
            <Card>
                viagem 
            </Card>
        </HomeAdminHomePage>
    )
}

export default AdminHomePage;