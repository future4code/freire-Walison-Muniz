import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import Foto from './images/Foto.jpeg';
import Localiza from './images/Localiza.png';
import Vivo from './images/Vivo.png'


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={Foto} 
          nome="Walison" 
          descricao="Oi, eu sou o Walison. Sou Consultor de Negócios na Localiza. 
          Estudo Desenvolvimento Full Stack na labenu Cursos de Programação.
          Tenho como objetivo, migrar dentro da companhia para a área de TI, logo que me formar e conseguir ser aprovado em procsso interno."
        />
        
        <ImagemButton 
          imagem={Foto} 
          texto="Ver mais"
        />
      </div>
      <CardPequeno/>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={Localiza} 
          nome="Localiza" 
          descricao="Consultor de Negócios" 
        />
        
        <CardGrande 
          imagem={Vivo} 
          nome="Vivo" 
          descricao="Consultor de Negócios" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
