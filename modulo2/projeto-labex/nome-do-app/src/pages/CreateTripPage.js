import React from 'react'
import Styled from 'styled-components';


const HomeCreateTripPage = Styled.div`
    margin: 30px 0px;
    padding: 0px;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    flex-direction: column;
  
`

const H1 = Styled.div`
    text-align: center;
    font-family: Open-Sans, Helvetica, sans-serif;
    display: block;
    font-size: 3em;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
    color: slategray;
`

const Form = Styled.div`
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    width: 500px;
    margin: 35px;
`
const ButtonsHomeCreateTripPage = Styled.div`
    display: flex;
    justify-content: space-around;
    width: 300px;
    margin: 20px 0px 0px;
    margin-bottom: 15px;
    height: 40px;
    padding: 0px 20px;
    border-radius: 20px;
    border: none;
    font-size: 20px;
    min-width: 100px;
`


function CreateTripPage() {
    return (
        <HomeCreateTripPage>
            <div>
                <H1>Criar Viagem</H1>
            </div>
            <Form action="">
                <input placeholder="Nome" name="name" title="O nome da viagem" required="" value="" />
                <select placeholder="Planeta" name="planet" required="">
                    <option value="" disabled="" selected="">Escolha um Planeta</option>
                    <option value="Mercúrio">Mercúrio</option>
                    <option value="Vênus">Vênus</option>
                    <option value="Terra">Terra</option>
                    <option value="Marte">Marte</option>
                    <option value="Jupiter">Jupiter</option>
                    <option value="Saturno">Saturno</option>
                    <option value="Urano">Urano</option>
                    <option value="Netuno">Netuno</option>
                    <option value="Plutão">Plutão</option>
                </select>
                <input type="date" placeholder='' name='date' />
                <input placeholder="Descrição" name="description" required="" pattern="^.{30,}$" title="O nome deve ter no mínimo 30 caracteres" value="" />
                <input placeholder="Duração em dias" type="number" name="durationInDays" required="" min="50" value=""></input>
            </Form>
            <ButtonsHomeCreateTripPage>
                <button>Voltar</button>
                <button>Criar</button>
            </ButtonsHomeCreateTripPage>
        </HomeCreateTripPage>
    )
}
export default CreateTripPage;