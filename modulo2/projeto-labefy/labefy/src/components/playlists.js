import React from 'react';
import styled from 'styled-components';
import axios from 'axios'

export default class Lista extends React.Component {
    state = {
        usuarios: [],
        estilos: []
    }

    componentDidMount() {
        this.getAllUsers()
    }

    getAllUsers = () => {
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", {
            headers: {
                Authorization: "leonardo-almeida-freire"
            }
        }).then((response) => {
            this.setState({ usuarios: response.data.result.list })
        })
            .catch((err) => {
                alert("Ocorreu um problema, tente novamente")
            })
    }



    deletUser = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`
        axios.delete(url, {
            headers: {
                Authorization: "leonardo-almeida-freire"
            }
        })
            .then((res) => {
                alert("Usuário(a) deletado(a) com sucesso!")
                this.getAllUsers()
            })
            .catch((err) => {
                alert("Ocorreu um erro, tente novamente")
            })
    }

    

    render() {
        console.log(this.state.usuarios)
        
         
        const listaUsuarios = this.state.usuarios.map((user) => {
            return (
                <div key={user.id}>
                    {user.name}
                    <button onClick={() => this.deletUser(user.id)}>Apagar</button>
                </div>
            )
        })
       

        return (
            <div>
                <h2>Lista de Usuários</h2>
                {listaUsuarios}
                <br></br>
                <br></br>
                <button onClick={this.props.voltar}>Voltar</button>
            </div>
        )
    }
}

