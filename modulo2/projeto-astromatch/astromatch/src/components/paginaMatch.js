import styled from 'styled-components'

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


const Card = (props) => {
    return <Bloco>
      <Conteudo>
        <FotoPerfil>
          <img src={props.photo} alt={props.photo_alt} height='100%' width='100%' />
        </FotoPerfil>
        <Descricao>
          <Nome>
            <h3>{props.name},</h3><span>{props.age}</span>
          </Nome>
          <Bio>{props.bio}</Bio>
        </Descricao>
      </Conteudo>
      <Botoes>
        <Del onClick={props.passo}>
          <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" className="bi bi-x-circle" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>
        </Del>
        <Coracao onClick={props.coracao}>
          <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" className="bi bi-suit-heart-fill" viewBox="0 0 16 16">
            <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z" />
          </svg>
        </Coracao>
      </Botoes>
    </Bloco>
  }

  export default Card