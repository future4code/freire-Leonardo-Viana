import styled from "styled-components"

export const Tela = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

export const Bloco = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;


`

export const Titulo = styled.h1`
margin-top: 30px;
font-size: 33px;
width: 364px;
@media (max-width: 400px) {
  width: 300px;
}
`

export const Form = styled.form`
display: flex;
flex-direction: column;
margin-top: 200px;
@media (max-width: 400px) {
  margin-top: 50px;
  align-items: center;
}
p{
  width: 361px;
  font-size: 14px;
  margin-top: 60px;
  @media (max-width: 400px) {
  width: 350px; 
}
}
div{
    margin-top: 18px;
    width: 350px;
    font-size: 14px;
    display: flex;
    @media (max-width: 400px) {
    width: 350px;   
}
}

`

export const Input = styled.input`
height: 60px;
width: 363px;
border-radius: 4px;
border: 1px solid #D5D8DE;
margin-bottom: 8px;
padding: 0px 5px;
@media (max-width: 400px) {
  width: 350px;
}
`

export const Checkbox = styled.input`
height: 18px;
width: 18px;
border-radius: 2px;
/* color: #C4C4C4; */
border: 1px solid #C4C4C4;
`

export const Botao = styled.button`
background-image: linear-gradient(to right, #FF6489, #F9B24E);
margin: 55px 0px;
width: 365px;
height: 51px;
border-radius: 27px;
border: 0;
color: white;
font-size: 18px;
:hover{
    cursor: pointer;
}
`

export const Header = styled.div`
padding: 0;
width: 100%;
height: 50px;
background-color: #EDEDED;
display: flex;
justify-content: space-around;
align-items: center;
`

export const Image = styled.div`
width: 28px;
height: 29px;
`

export const SignIn = styled.button`
font-size: 18px;
color: #4088CB;
border: 1px solid #EDEDED;
background-color: #EDEDED;
`