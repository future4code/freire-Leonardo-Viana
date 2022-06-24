import React from 'react';
import styled from 'styled-components';
import axios from 'axios'

export default class Lista extends React.Component {
    state = {
        detalhes: []
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
                return this.props.atualiza
            })
            .catch((err) => {
                alert("Ocorreu um erro, tente novamente")
            })
    }


    getPlaylistTracks = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`
        axios.get(url, {
            headers: {
                Authorization: "leonardo-almeida-freire"
            }
        })
            .then((res) => {
                alert("deu bom")              
               this.setState({detalhes: res.data.result.tracks})
               
            })
            .catch((err) => {
                alert("Ocorreu um erro, tente novamente")
            })
    }

    
    clicar = (x) => {
        this.getPlaylistTracks(x)        
        console.log(this.state.detalhes)
        return (
        <div>
            <h3>{this.state.detalhes.artist}</h3>
            <p>{this.state.detalhes.name}</p>
        </div>
        )}


    render() {
        
        const listaDeMusica = this.props.playlist.map((user) => {
            return (
                <div key={user.id}>
                    <button onClick={() => (this.clicar(user.id))}>                       
                        <div>
                            {user.name}
                        </div>                        
                    </button>
                    <div>
            <h3>{this.state.detalhes.artist}</h3>
            <p>{this.state.detalhes.name}TESTE</p>
        </div>
                    <button onClick={() => (this.deletePlaylist(user.id))}>Apagar</button>

                </div>
            )
        })


        return (
            <div>
                <h2>Playlists</h2>
                {listaDeMusica}
                <br></br>
                <br></br>
                <button onClick={this.props.voltar}>Voltar</button>
            </div>
        )
    }
}

