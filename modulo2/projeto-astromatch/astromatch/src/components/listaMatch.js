import { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'


const Fundo = styled.div`
height: 48vh;
background-color: yellow;
overflow: auto;

`
const Layout = styled.div`
display: flex;
flex-direction: row;
/* background-color: aliceblue; */
height: 6vh;

span{
    margin: 20px;
    font-size: large;
}
`

const Imagem = styled.div`
margin: 10px;
img{
    height: 40px;
    width: 40px;
    border-radius: 50px;
}
`

const Bloco = styled.div`
height: 6vh;
display: flex;
flex-direction: row;
align-items: center;
width: 100%;
margin: 5px;
:hover{
    cursor: pointer;
    background-color: rgb(207, 135, 0);
}
:active{
  background-color: rgb(255, 194, 102);
}
`


const Lista = (props) => {

    const [lista,setLista] = useState([])

    useEffect(() => {
      getMatches()  
    })


    const getMatches = () => {
        axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/leonardo/matches')
          .then(res => {
            setLista(res.data.matches)
          })
          .catch(err => {
            console.log(err)
          })
      }   
    
    const listaFormatada = lista.map((match) => {        
        return <Layout>
            <Bloco>
                   <Imagem>
                    
                <img key={match.id} src={match.photo}/>
            </Imagem>
            <div>
                {match.name}
            </div>
            </Bloco>                   
        </Layout>
        
        
    }) 
    
    const retorno = () => {
        if (lista.length == 0 ) {
            return <Layout>
               <span>Você ainda não tem matches!</span> 
                </Layout>
        } else {
            return listaFormatada
        }
    }

    return(
        <Fundo>            
            {retorno()}
        </Fundo>
    )

}

export default Lista 