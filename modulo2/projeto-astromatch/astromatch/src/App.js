import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import styled from 'styled-components'

const CampoVisao = styled.div`
background-color: rgb(255,235,205);
position: absolute;
height: 100vh;
width: 100vw;
`

const Layout = styled.div`
background-color: orange;
height: 60vh;
width: 22vw;
margin: auto;
margin-top: 15vh;
border-radius: 5px;
border: 2px solid black;
`

const Header = styled.div`
background-color: white;
display: flex;
flex-direction: row;
justify-content: right;
border-radius: 2px;
`

const Titulo = styled.h2`
margin-right: 5vw;
color: orange;
font-family: sans-serif;
`

const Imagem = styled.button`
margin: auto 0;
margin-right: 10px;
color: orange;
background-color: white;
border: 0;
`

const Linha = styled.hr`
margin: 0;
width: 100%;
position: relative;
`

const Bloco = styled.div`
/* background-color: white; */
width: 20vw;
height: 48vh;
margin: auto;
margin-top: 2vh;
`

const Conteudo = styled.div`
/* background-color: brown; */
height: 40vh;
border-radius: 10px;
border: 1px solid orange;
:hover{
  border: 1px solid silver;
  img{
    opacity: 0.5;    
  }
}
`

const PaginaInicial = styled.div`
display: flex;
height: 40vh;
justify-content: center;
align-items: center;
`

const BotaoInicial = styled.button`
border: 0;
background-color: orange;
color: white;
cursor: pointer;
svg{
  height:80px;
  width:80px;
}
:hover{
  color: rgb(207, 135, 0) ;
}
`

const Botoes = styled.div`
display: flex;
justify-content: space-around;
/* margin-top: 1vh; */
`

const Del = styled.button`
background-color: orange;
color: red;
border: 1px solid orange;
position: relative;
top: 15px;
:hover{ 
  border: 1px solid rgb(207, 135, 0);
  border-radius: 10px;
  cursor: pointer;
  background-color: rgb(207, 135, 0);
  transition: 500ms;
}
:active{
  background-color: rgb(255, 194, 102);
  border: 1px solid rgb(255, 194, 102);
  border-radius: 10px;
  
}
`
const Coracao = styled.button`
background-color: orange;
color: green;
border: 1px solid orange;
position: relative;
top:15px;
:hover{ 
  border: 1px solid rgb(207, 135, 0);
  border-radius: 10px;
  cursor: pointer;
  background-color: rgb(207, 135, 0);
  transition: 500ms;
}
:active{
  background-color: rgb(255, 194, 102);
  border: 1px solid rgb(255, 194, 102);
  border-radius: 10px;
}
`

const FotoPerfil = styled.div`
height: 100%;
width: 100%;
img{
  border-radius: 10px;
  transition: 2s;
}
`
const Descricao = styled.div`
display: flex;
flex-direction: column;
position: relative;
bottom: 35%;
margin: 0;
`

const Nome = styled.div`
color: white;
margin: 0 10px;
display: inline-flex;
flex-direction: row;
align-items:baseline;
h3{
  margin: 0;
}
span{
  margin-left: 10px;
  font-size: large;
}
`

const Bio = styled.div`
color: white;
margin: 0 10px;
width: 200px;
`

function App() {
  const [perfil, setPerfil] = useState({})
  const [variavel, setVariavel] = useState(0)
  const [pego, setPego] = useState(null)
  const [tela, setTela] = useState(0)

  const Match = () => {
    setPego(true)
  }

  const Passo = () => {
    setPego(false)
  }

  const getProfileToChoose = () => {
    axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/leonardo/person')
      .then(res => {
        setPerfil(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const choosePerson = () => {
    const body = {
      "id": perfil.profile.id,
      "choice": pego
    }
    axios.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/leonardo/choose-person', body)
      .then(res => {
        console.log(res.data)
        console.log(pego)
      })
      .catch(err => {
        console.log(err)
      })
  }

  useEffect(() => {
    getProfileToChoose()
    if (tela > 0) {
      choosePerson()
    }
  }, [variavel]);

  const Clear = () => {
    axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/leonardo/clear')
      .then(res => {
        console.log(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const mudaTela = () => {
    setTela(tela + 1)
  }

  const mudaPerfilCoracao = () => {
    setVariavel(variavel + 1)
    Match()
  }

  const mudaPerfilPasso = () => {
    setVariavel(variavel + 1)
    Passo()
  }

  const Inicio = () => {
    return <PaginaInicial>
      <BotaoInicial onClick={() => { mudaTela() }}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-arrow-through-heart" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M2.854 15.854A.5.5 0 0 1 2 15.5V14H.5a.5.5 0 0 1-.354-.854l1.5-1.5A.5.5 0 0 1 2 11.5h1.793l.53-.53c-.771-.802-1.328-1.58-1.704-2.32-.798-1.575-.775-2.996-.213-4.092C3.426 2.565 6.18 1.809 8 3.233c1.25-.98 2.944-.928 4.212-.152L13.292 2 12.147.854A.5.5 0 0 1 12.5 0h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.854.354L14 2.707l-1.006 1.006c.236.248.44.531.6.845.562 1.096.585 2.517-.213 4.092-.793 1.563-2.395 3.288-5.105 5.08L8 13.912l-.276-.182a21.86 21.86 0 0 1-2.685-2.062l-.539.54V14a.5.5 0 0 1-.146.354l-1.5 1.5Zm2.893-4.894A20.419 20.419 0 0 0 8 12.71c2.456-1.666 3.827-3.207 4.489-4.512.679-1.34.607-2.42.215-3.185-.817-1.595-3.087-2.054-4.346-.761L8 4.62l-.358-.368c-1.259-1.293-3.53-.834-4.346.761-.392.766-.464 1.845.215 3.185.323.636.815 1.33 1.519 2.065l1.866-1.867a.5.5 0 1 1 .708.708L5.747 10.96Z" />
        </svg>
        <div>Iniciar</div>
      </BotaoInicial>
    </PaginaInicial>
  }

  const Card = () => {
    return <Bloco>
      <Conteudo>
        <FotoPerfil>
          <img src={perfil.profile.photo} alt={perfil.profile.photo_alt} height='100%' width='100%' />
        </FotoPerfil>
        <Descricao>
          <Nome>
            <h3>{perfil.profile.name},</h3><span>{perfil.profile.age}</span>
          </Nome>
          <Bio>{perfil.profile.bio}</Bio>
        </Descricao>
      </Conteudo>
      <Botoes>
        <Del onClick={() => { mudaPerfilPasso() }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>
        </Del>
        <Coracao onClick={() => { mudaPerfilCoracao() }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" class="bi bi-suit-heart-fill" viewBox="0 0 16 16">
            <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z" />
          </svg>
        </Coracao>
      </Botoes>
    </Bloco>
  }

  const Comecar = () => {
    if (tela === 0) {
      return Inicio()
    } else {
      return Card()
    }
  }



  return (
    <CampoVisao>
      <Layout>
        <Header>
          <Titulo>Astromatch</Titulo>
          <Imagem>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-through-heart-fill" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M2.854 15.854A.5.5 0 0 1 2 15.5V14H.5a.5.5 0 0 1-.354-.854l1.5-1.5A.5.5 0 0 1 2 11.5h1.793l3.103-3.104a.5.5 0 1 1 .708.708L4.5 12.207V14a.5.5 0 0 1-.146.354l-1.5 1.5ZM16 3.5a.5.5 0 0 1-.854.354L14 2.707l-1.006 1.006c.236.248.44.531.6.845.562 1.096.585 2.517-.213 4.092-.793 1.563-2.395 3.288-5.105 5.08L8 13.912l-.276-.182A23.825 23.825 0 0 1 5.8 12.323L8.31 9.81a1.5 1.5 0 0 0-2.122-2.122L3.657 10.22a8.827 8.827 0 0 1-1.039-1.57c-.798-1.576-.775-2.997-.213-4.093C3.426 2.565 6.18 1.809 8 3.233c1.25-.98 2.944-.928 4.212-.152L13.292 2 12.147.854A.5.5 0 0 1 12.5 0h3a.5.5 0 0 1 .5.5v3Z" />
            </svg>
          </Imagem>
        </Header>
        <Linha color='black' />
        {Comecar()}
      </Layout>
      <div>
        <button onClick={() => { Clear() }}>Apagar tudo</button>
      </div>

    </CampoVisao>
  );
}

export default App;
