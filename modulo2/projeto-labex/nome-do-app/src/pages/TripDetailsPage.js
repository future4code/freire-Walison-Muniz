import React from 'react';
import Styled from 'styled-components'

const HomeTriPDetailsPage = Styled.div`
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
`

const H1 = Styled.div`
    text-align: center;
    font-family: Open-Sans, Helvetica, sans-serif;
    /* display: block; */
    font-size: 2em;
    margin-block-start: 0.67em;
    /* margin-block-end: 0.67em; */
    /* margin-inline-start: 0px; */
    /* margin-inline-end: 0px; */
    font-weight: bold;
    color: slategray;

`

const Card = Styled.div`

    padding: 40px 20px;
    border-radius: 15px;
    margin: 15px 0px;
    max-width: 500px;

`

const Button = Styled.div`
    margin-bottom: 15px;
    height: 50px;
    padding: 0px 30px 0px;
    border-radius: 25px;
    /* border: none; */
    font-size: 32px;
    background-color: slategray;
    min-width: 100px;
    margin-right: 30px;
`

const H3 = Styled.div`
    text-align: center;
    font-family: Open-Sans, Helvetica, sans-serif;
    display: block;
    font-size: 1.5em;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
    color: slategray;
`
const P = Styled.div`
    color: rgb(57, 65, 69);
    font-family: Open-Sans, Helvetica, sans-serif;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;

`

function TripDetailsPage() {
    return (
        <HomeTriPDetailsPage>
            <div>
                <H1>
                    Mariluci de Lima Walczak
                </H1>
            </div>
            <Card>
                cardDetalhes
            </Card>
            <Button>
                <button>Voltar</button>
            </Button>
            <div>
                <H3>Candidatos Pendentes</H3>
                <P>Não há candidatos pendentes</P>
                <H3>Candidatos Aprovados</H3>
                <P>Não hácandidatos Aprovados</P>
            </div>
        </HomeTriPDetailsPage>
    )
}
export default TripDetailsPage;