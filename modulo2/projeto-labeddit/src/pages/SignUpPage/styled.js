import styled from "styled-components"

export const Bloco = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
`

export const Titulo = styled.h1`
margin-top: 30px;
font-size: 33px;
width: 364px;
`

export const Form = styled.form`
display: flex;
flex-direction: column;
margin-top: 200px;
p{
  width: 361px;
  font-size: 14px;
  margin-top: 60px;
}
div{
    margin-top: 18px;
    width: 350px;
    font-size: 14px;
    display: flex;
}
`

export const Input = styled.input`
height: 60px;
width: 363px;
border-radius: 4px;
border: 1px solid #D5D8DE;
margin-bottom: 8px;
padding: 0px 5px;
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
justify-content: space-between;
align-items: center;
`

export const Image = styled.div`
width: 28px;
height: 29px;
margin: 10px 200px;
position: absolute;
`

export const SignIn = styled.button`
font-size: 18px;
color: #4088CB;
border: 1px solid #EDEDED;
margin: 0px 30px;
background-color: #EDEDED;
`