import React from 'react';
import Styled from 'styled-components'

const HomeApplicationFormPage = Styled.div`
    margin: 30px;
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
    font-size: 2em;
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
    align-items: center;
    width: 500px;
    margin-top: 0em;

`
const SelectOne = Styled.div`
    width: 518px;
    height: 40px;
    border-radius: 10px;
    padding: 4px 8px;
    border-width: 1px;
    margin: 0px 0px 15px;
`
const Input = Styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 30px;
    border-radius: 10px;
    padding: 4px 8px;
    border-width: 1px;
    border-color: gray;
    margin: 0px 0px 15px;
`
const SelectTwo = Styled.div`
    width: 518px;
    height: 40px;
    border-radius: 10px;
    padding: 4px 8px;
    border-width: 1px;
    margin: 0px 0px 15px;
`

const Buttons = Styled.div`
    display: flex;
    justify-content: space-around;
    width: 500px;
    margin: 10px 0px;
    
    
`


function ApplicationFormPage() {
    return (
        <HomeApplicationFormPage>
            <H1>Inscreva-se para uma viagem</H1>
            <Form action="Cadastrar Viagem">
                <SelectOne>
                    <select multiple name="Viagem" id="viagem">
                        <option value="">loren10</option>
                        <option value="">loren10</option>
                        <option value="">loren10</option>
                        <option value="">loren10</option>
                    </select>
                </SelectOne>
                <Input>
                    <input type="text" placeholder='Nome' value='' />
                    <input type="text" placeholder='Idade' value='' />
                    <input type="text" placeholder='Texto da Candidatura' value='' />
                    <input type="text" placeholder='Profissão' value='' />
                </Input>
                <SelectTwo>
                    <select multiple name="Pais" id="pais">
                        <option value="">loren10</option>
                        <option value="">loren10</option>
                        <option value="">loren10</option>
                        <option value="">loren10</option>
                    </select>
                </SelectTwo>
            </Form>
            <Buttons>
                <button>Voltar</button>
                <button>Enviar</button>
            </Buttons>
        </HomeApplicationFormPage>
    )
}
export default ApplicationFormPage;