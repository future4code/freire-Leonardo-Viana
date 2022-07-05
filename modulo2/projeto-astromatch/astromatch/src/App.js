import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'

const Layout = styled.div`
background-color:white;
width: 45vw;
height: 64vh;
margin: 18vh auto;
border-radius: 5px;
border: 1px solid black;
padding: 1px;
`

const Header = styled.div`
background-color: white;
display: flex;
justify-content: flex-end;
padding: 15px 10px;
`

const Title = styled.div`
margin-right: 15vw;
`


function App() {
  return (

    <Layout>
      <Header>
        <Title>texto</Title>
        <div>imagem</div>        
      </Header>
      <hr size='1px' noshade/>
      

      teste
      teste
    </Layout>


  );
}

export default App;
