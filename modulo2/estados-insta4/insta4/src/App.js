import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {


  state = {
    post: [
      {
        nomeUsuario: "paulinha",
        fotoUsuario: "https://picsum.photos/50/50",
        fotoPost: "https://picsum.photos/200/150",
      },
      {
        nomeUsuario: "leonardo",
        fotoUsuario: "https://picsum.photos/50/50?random=1",
        fotoPost: "https://picsum.photos/200/150?random=1",
      },
      {
        nomeUsuario: "julia",
        fotoUsuario: "https://picsum.photos/50/50?random=2",
        fotoPost: "https://picsum.photos/200/150?random=2",
      }
    ],
    valorInputNome: "",
    valorInputFotoPerfil: "",
    valorInputFotoPost: ""
  }

  adicionaPost = () => {
    const novoPost = {
      nomeUsuario: this.state.valorInputNome,
      fotoUsuario: this.state.valorInputFotoPerfil,
      fotoPost: this.state.valorInputFotoPost
    };


    const novoPosts = [...this.state.post, novoPost];
    this.setState({ post: novoPosts });
  };

  onChangeInputNome = (event) => {
    this.setState({ valorInputNome: event.target.value });
  };

  onChangeInputFotoPerfil = (event) => {
    this.setState({ valorInputFotoPerfil: event.target.value });
  };

  onChangeInputFotoPost = (event) => {
     this.setState({ valorInputFotoPost: event.target.value });
  };


  render() {

    const usuarios = this.state.post.map((a) => {
      return (
        <Post
          nomeUsuario={a.nomeUsuario}
          fotoUsuario={a.fotoUsuario}
          fotoPost={a.fotoPost}
        />)
    })
    
    return (
      <MainContainer>
        {usuarios}
        <div>
          <input

            value={this.state.valorInputNome}

            onChange={this.onChangeInputNome}
            placeholder={"Nome de usuario"}
          />
          <input

            value={this.state.valorInputFotoPerfil}

            onChange={this.onChangeInputFotoPerfil}
            placeholder={"Foto de Perfil (link URL)"}
          />
          <input

            value={this.state.valorInputFotoPost}

            onChange={this.onChangeInputFotoPost}
            placeholder={"Foto (link URL)"}
          />
          <button onClick={this.adicionaPost}>Adicionar Post</button>
        </div>
      </MainContainer>

    );
  }
}

export default App;
