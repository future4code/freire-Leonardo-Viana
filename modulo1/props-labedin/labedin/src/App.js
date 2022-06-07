import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }

  p {
    margin: 0;
  }`



const LayoutApp = styled.div`
display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`

const PageSectionContainer = styled.div`
width: 40vw;
margin: 10px 0;`

const Hdois = styled.h2`
 display: flex;
  justify-content: center;
  margin-bottom: 20px;`




function App() {
  return (
    <LayoutApp>
      <GlobalStyle/>
      <PageSectionContainer>
        <Hdois>Dados pessoais</Hdois>
        <CardGrande
          imagem='https://media-exp2.licdn.com/dms/image/C4D03AQGkxPDh3xKc8w/profile-displayphoto-shrink_800_800/0/1638453841370?e=1660176000&v=beta&t=yKjewJjrTThe9iuxTV-ICudFcT01Wb3OL1fxFq-eknE'
          nome="Leonardo de Almeida Lino Viana"
          descricao="Tenho 19 anos e sou estudante da labenu, gosto muito de músicas."
        />

        <ImagemButton
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png"
          texto="Ver mais"
        />

        <CardPequeno
          imagem="https://www.clubelatino.com.br/contatos/attachment/email/"
          email="leonardo@labenu.com.br"
          outraImagem="https://security.ufpb.br/ladepi/contents/imagens/casa-preta.png/view"
          endereco="Rua Labenu, 185"
        />

      </PageSectionContainer>

      <div className="page-section-container">
        <Hdois>Experiências profissionais</Hdois>
        <CardGrande
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png"
          nome="Labenu"
          descricao="Cursando Web Full Stack"
        />

        <CardGrande
          imagem="https://www.crunchbase.com/organization/universidade-s-o-judas-tadeu/org_similarity_overview"
          nome="Universidade São Judas Tadeu"
          descricao="Cursando o terceiro ano em engenharia da Computação."
        />
      </div>

      <div className="page-section-container">
        <Hdois>Minhas redes sociais</Hdois>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />

        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
        />
      </div>
    </LayoutApp >
  );
}

export default App;
