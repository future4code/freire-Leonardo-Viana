import styled from 'styled-components'

const Bloco = styled.button`
margin: 30px;
background-color:rgb(207, 135, 0);
border: 1px solid rgb(255, 194, 102);
cursor: pointer;
:hover {
    border: 2px solid rgb(255, 194, 102);
}
:active {
    background-color: rgb(255, 194, 102);
}
`

const Instrucao = (props) => {
    return <Bloco onClick={props.clear}>Aperte aqui para recomeçar.</Bloco>
}

export default Instrucao