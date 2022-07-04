import React from 'react';
import styled from 'styled-components'

const Corpo = styled.div`
display: flex;
flex-direction: column;
width: 15vw;
padding: 30px;
`


export default class Inicio extends React.Component {
    render() {
        return (
            <Corpo>
               <h1>Criar Playlist</h1>
               <input value={this.props.playlist} onChange={this.props.changePlaylist} placeholder='Nome'></input>               
               <button onClick={this.props.criar}>Criar</button>
               <br></br>
               <br></br>
               <br></br>
               <button onClick={this.props.proxima}>Visualizar Playlists</button>               
            </Corpo>

        )
    }

}
