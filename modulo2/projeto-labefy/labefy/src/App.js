import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import axios from 'axios';
import Inicio from './components/tela-inicio';
import React from 'react';
import Lista from './components/playlists';
import userEvent from '@testing-library/user-event';

const Corpo = styled.div`
display: flex;
flex-direction: column;
width: 15vw;
padding: 30px;
`


export default class App extends React.Component {
  state = {
    inputPlaylist: "",    
    tela: true,
    playlists: []
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
        alert("Playlist criada com sucesso!")
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

  


  componentDidMount() {
    this.getAllPlaylists()
}

getAllPlaylists = () => {
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", {
        headers: {
            Authorization: "leonardo-almeida-freire"
        }
    }).then((response) => {
        this.setState({ playlists: response.data.result.list })
    })
        .catch((err) => {
            alert("Ocorreu um problema, tente novamente")
        })
}



deletePlaylist = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`
    axios.delete(url, {
        headers: {
            Authorization: "leonardo-almeida-freire"
        }
    })
        .then((res) => {
            alert("Playlist deletada com sucesso!")
            this.getAllPlaylists()
        })
        .catch((err) => {
            alert("Ocorreu um erro, tente novamente")
        })
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
           playlist={this.state.playlists}        
          atualiza={this.getAllPlaylists()}
                         
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
