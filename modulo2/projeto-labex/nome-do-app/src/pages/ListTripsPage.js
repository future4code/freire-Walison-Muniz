import React from 'react';
import Styled from 'styled-components';


const ContainerListTripesPage = Styled.div`
    background-color: red;
    margin-top: 70px;
`
const ButtonsListTripesPage = Styled.div`
    background-color: blue;
    height: 30px;
   Width: 50%;
     display: flex;
     justify-content: space-evenly;
     align-content: center;
     margin-left: 350px;  
`
const TittleListTripesPage = Styled.div`
     background-color: yellow;
     display: flex;
     justify-content: center;
     margin-top: 50px;
     font-size: 18px;
`
function ListTripesPage() {
    return (
        <ContainerListTripesPage>
            <ButtonsListTripesPage>
                <button>Voltar</button>
                <button>Inscrever-se</button>
            </ButtonsListTripesPage>
            <TittleListTripesPage>
                <h1>Lista de Viagens</h1>
            </TittleListTripesPage>
            <div>
                cardViagems
            </div>
        </ContainerListTripesPage>
    )
}
export default ListTripesPage;