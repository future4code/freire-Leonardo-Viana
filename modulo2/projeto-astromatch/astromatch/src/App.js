import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import Instrucao from './components/instrucao'
import Lista from './components/listaMatch'
import Inicio from './components/paginaInicial'
import Card from './components/paginaMatch'

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
:hover{   
  border-radius: 10px;
  cursor: pointer;
  background-color: rgb(207, 135, 0);
  transition: 500ms;
}
:active{
  background-color: rgb(255, 194, 102);
  border-radius: 10px;  
}
`

const Linha = styled.hr`
margin: 0;
width: 100%;
position: relative;
`

const Limpar = styled.button`
position: fixed;
margin: 10px;
bottom: 0;
right: 0;
`

function App() {
  const [perfil, setPerfil] = useState({})
  const [variavel, setVariavel] = useState(0)
  const [pego, setPego] = useState(null)
  const [tela, setTela] = useState(0)
  const [lista, setLista] = useState([])

  const match = () => {
    setPego(true)
  }

  const passo = () => {
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

  const getMatches = () => {
    axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/leonardo/matches')
      .then(res => {
        setLista(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }



  useEffect(() => {
    if (tela > -1) {
      getProfileToChoose()
    }
    if (tela > 0) {
      choosePerson()
      getMatches()
    }
  }, [variavel]);

  const clear = () => {
    axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/leonardo/clear')
      .then(res => {
        console.log(res.data)
        window.location.reload()
      })
      .catch(err => {
        console.log(err)
      })
  }

  const mudaPrincipal = () => {
    setTela(1)
  }

  const mudaLista = () => {
    setTela(2)
  }

  const mudaPagina = () => {
    if (tela ==  1) {
      mudaLista()     
    } else if (tela == 2) {
      mudaPrincipal()     
    }    
  }

  const legenda = () => {    
    if (tela == 2 ) {
      return <div>Voltar</div>
    } else if (tela !== 2 && tela!==0) {
      return <div>Matches</div>
    }
  }

  const mudaPerfilCoracao = () => {
    setVariavel(variavel + 1)
    match()
  }

  const mudaPerfilPasso = () => {
    setVariavel(variavel + 1)
    passo()
  }

  const comecar = () => {
    if (tela === 0 ) {
      return <Inicio
        mudaTela={mudaPrincipal}
      />
    } else if (tela == 2) {
      return <Lista/>
    } else if (perfil.profile == null) {
      return <Instrucao
      clear={clear}
      />
    }
    else {
      return <Card
        photo={perfil.profile.photo}
        photo_alt={perfil.profile.photo_alt}
        name={perfil.profile.name}
        age={perfil.profile.age}
        bio={perfil.profile.bio}
        passo={mudaPerfilPasso}
        coracao={mudaPerfilCoracao}
      />
    }
  }

  return (
    <CampoVisao>
      <Layout>
        <Header>
          <Titulo>Astromatch</Titulo>
          <Imagem onClick={mudaPagina} className='bootstrap'>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-arrow-through-heart-fill" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M2.854 15.854A.5.5 0 0 1 2 15.5V14H.5a.5.5 0 0 1-.354-.854l1.5-1.5A.5.5 0 0 1 2 11.5h1.793l3.103-3.104a.5.5 0 1 1 .708.708L4.5 12.207V14a.5.5 0 0 1-.146.354l-1.5 1.5ZM16 3.5a.5.5 0 0 1-.854.354L14 2.707l-1.006 1.006c.236.248.44.531.6.845.562 1.096.585 2.517-.213 4.092-.793 1.563-2.395 3.288-5.105 5.08L8 13.912l-.276-.182A23.825 23.825 0 0 1 5.8 12.323L8.31 9.81a1.5 1.5 0 0 0-2.122-2.122L3.657 10.22a8.827 8.827 0 0 1-1.039-1.57c-.798-1.576-.775-2.997-.213-4.093C3.426 2.565 6.18 1.809 8 3.233c1.25-.98 2.944-.928 4.212-.152L13.292 2 12.147.854A.5.5 0 0 1 12.5 0h3a.5.5 0 0 1 .5.5v3Z" />
            </svg>
            <div>{legenda()}</div>
          </Imagem>
        </Header>
        <Linha color='black' />
        {comecar()}
      </Layout>
      <div>
        <Limpar onClick={() => { clear() }}>Limpar swipes e matches</Limpar>
      </div>

    </CampoVisao>
  );
}

export default App;
