import React from 'react';
import axios from 'axios'
import Cadastro from './components/tela-cadastro';
import Lista from './components/tela-lista';
import styled from 'styled-components'

const Corpo = styled.div`
display: flex;
flex-direction: column;
width: 15vw;
padding: 30px;
`


export default class App extends React.Component {
  state = {
    inputUser: "",
    inputEmail: "",
    tela: true
  }



  onChangeUser = (event) => {
    this.setState({ inputUser: event.target.value })
  }

  onChangeEmail = (event) => {
    this.setState({ inputEmail: event.target.value })
  }

  createUser = () => {
    const body = {
      name: this.state.inputUser,
      email: this.state.inputEmail
    }

    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', body,
      {
        headers: {
          Authorization: "leonardo-almeida-freire"
        }
      }).then((reponse) => {
        alert("Usuário cadastrado com sucesso!")
        this.setState({ inputUser: "", inputEmail: "" })
      }).catch((error) => {
        alert(error.response.data.message)
      })
  }


  deleteUser = () => {
    axios.delete()
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
        return <Cadastro
          user={this.state.inputUser}
          changeUser={this.onChangeUser}
          email={this.state.inputEmail}
          changeEmail={this.onChangeEmail}
          enviar={this.createUser}
          proxima={this.proximaTela}
        />
      case false:
        return <Lista
          lista={this.state.users}
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
