import React from 'react';
import styled from 'styled-components';
import axios from 'axios'

export default class Detalhes extends React.Component {
    getPlaylistTracks = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks
        `
        axios.get(url, {
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


    render() {
        const listaDeMusica = this.props.playlist.map((user) => {
            return (
                <div key={user.id}>
                    <button>
                        <div>
                            {user.name}
                        </div>                        
                    </button>
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