import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import axios from 'axios';
import Inicio from './components/tela-inicio';
import React from 'react';
import Lista from './components/playlists';

const Corpo = styled.div`
display: flex;
flex-direction: column;
width: 15vw;
padding: 30px;
`


export default class App extends React.Component {
  state = {
    inputPlaylist: "",    
    tela: true
  }



  onChangePlaylist = (event) => {
    this.setState({ inputPlaylist: event.target.value })
  }


  createUser = () => {
    const body = {
      name: this.state.inputPlaylist      
    }

    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', body,
      {
        headers: {
          Authorization: "leonardo-almeida-freire"
        }
      }).then((reponse) => {
        alert("Playlsit criada com sucesso!")
        this.setState({ inputPlaylist: ""})
      }).catch((error) => {
        alert(error.response.data.message)
      })
  } 


  proximaTela = () => {
    this.setState({ tela: false })
  }

  telaAnterior = () => {
    this.setState({ tela: true })
  }

  trocarTela = () => {
    switch (this.state.tela) {
      case true:
        return <Inicio
        playlist={this.inputPlaylist}
        changePlaylist={this.onChangePlaylist}
        criar={this.createUser}
        proxima={this.proximaTela}
        />       
      case false:
        return  <Lista
           voltar={this.telaAnterior}
                
        />

      default:
        return <div>Página não encontrada.</div>
    }
  }

  render() {

    return (
      <Corpo>
        {this.trocarTela()}
      </Corpo>

    )
  }
}
