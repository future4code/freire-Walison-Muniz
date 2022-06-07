import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import Foto from './img/Foto.jpeg';
import Linkedin from './img/Linkedin.png';
import GitHub from './img/Github.png';



function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem={Foto}
          nome="Walison"
          descricao="Experiência de 18 anos na área comercial e administrativa, sempre voltada para vendas e foco nos resultados definidos pela empresa. Tive a oportunidade de trabalhar em grandes empresas como Carrefour Ind. e Comércio, Claro S/A e por último na Telefonica Brasil.
          No momento, me desenvolvendo e aperfeiçoando as Softs e Hard Skills aderentes a um Full Stack Developer na Labenu - Cursos de programação."
        />

        <ImagemButton
          imagem={Foto}
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem={Foto}
          nome=" VIVO TELEFONICA "
          descricao=" Consultor de vendas / Fevereiro de 2020 - Março de 2022 "
        />

        <CardGrande
          imagem={Foto}
          nome="AGR TELECOM "
          descricao=" Vendedor / Junho de 2019 - Março de 2020 "
        />
        <CardGrande
          imagem={Foto}
          nome="UNIMED BH "
          descricao=" Auxiliar de atendimento ao cliente / Março de 2017 - Junho de 2019"
        />

        <CardGrande
          imagem={Foto}
          nome="3C COMÉRCIO "
          descricao=" Gerente comercial / Agosto de 2015 - Novembro de 2016"
        />
        <CardGrande
          imagem={Foto}
          nome=" AÇAI DO MATO "
          descricao=" Proprietário março de 2013 - junho de 2015"
        />

        <CardGrande
          imagem={Foto}
          nome=" CLARO S/A "
          descricao=" Vendedor / Janeiro de 2011 - Maio de 2013 "
        />
        <CardGrande
          imagem={Foto}
          nome="CARREFOUR"
          descricao=" Vendedor de varejo / Março de 2006 - Novembro de 2009"
        />

      </div>


      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton
          imagem={Linkedin}
          texto="Linkedin"
          lidnk="https://www.linkedin.com/in/walison-muniz-22990320b/"
        />

        <ImagemButton
          imagem={GitHub}
          texto="GitHub"
          link="https://github.com/walison33-fillipe"
        />
      </div>
    </div>
  );
}

export default App;
