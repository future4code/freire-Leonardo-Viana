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
    users: [],
    inputUser: "",
    inputEmail:""
  }

  onChangeUser = (event) => {
    this.setState({inputUser: event.target.value})
  }

  onChangeEmail = (event) => {
    this.setState({inputEmail: event.target.value})
  }

  createUser = () => {
    const body = {
      name: this.state.inputUser,
      email: this.state.inputEmail
    }

    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', body, 
    {headers:{
      Authorization: "leonardo-almeida-freire"     
    }}).then((reponse) => {
      console.log(reponse.data)
      this.getAllUsers()
      alert("")     
    }).catch((error) => {
      console.log(error.message)
      alert("Você concluiu seu cadastro.")
    })
  }

  deleteUser = () => {
    axios.delete()

  }



  getAllUsers = () => {
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',
     {headers:{
      Authorization: "leonardo-almeida-freire"
    }}).then((response) => {
      this.setState({users: response.data})
    }).cath((error) => {
      console.log(error.message)
    })
  }

  alerta = () => {
    return alert("Você concluiu seu cadastro.")
  }

  cadastro = () => {
    this.createUser()
    this.getAllUsers()
    this.alerta()    
  }




  render(){
    
    return(
      <Corpo>
        <Cadastro
     user={this.state.inputUser}
     changeUser={this.onChangeUser}
     email={this.state.inputEmail}
     changeEmail={this.onChangeEmail}
     enviar={this.cadastro}     
     />      
     <Lista
     lista={this.state.users}
     />
    
      </Corpo>
        
    )
  }
}
