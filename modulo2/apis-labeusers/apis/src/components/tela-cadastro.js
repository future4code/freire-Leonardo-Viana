import React from 'react';
import styled from 'styled-components'

const Corpo = styled.div`
display: flex;
flex-direction: column;
width: 15vw;
padding: 30px;
`


export default class Cadastro extends React.Component {
    render() {
        return (
            <Corpo>
               <h1>Cadastro</h1>
               <input value={this.props.user} onChange={this.props.changeUser} placeholder='Nome'></input>
               <input value={this.props.email} onChange={this.props.changeEmail} placeholder='Email'></input>
               <button onClick={this.props.enviar}>Enviar</button>               
            </Corpo>

        )
    }

}
