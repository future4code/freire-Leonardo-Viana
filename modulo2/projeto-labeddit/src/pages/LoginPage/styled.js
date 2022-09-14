import styled from "styled-components";

export const Bloco = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
font-family: "IBM Plex Sans";
font-weight: 300;
font-style: normal;
`

export const Titulo = styled.div`
width: 152px;
height: 142px;
margin-top: 135px;
@media (max-width: 400px) {
  margin-top: 50px;
}
`

export const Subtitulo = styled.div`
font-size: 16px;
`

export const Form = styled.form`
display: flex;
flex-direction: column;
margin-top: 100px;
input{
    height: 60px;
    border-radius: 4px;
    border: 1px solid #D5D8DE;
    margin-bottom: 8px;
    padding: 0px 5px;
    font-family: "IBM Plex Sans";
    font-weight: 300;
    font-style: normal;
}
button{
   background-image: linear-gradient(to right, #FF6489, #F9B24E);
   margin-top: 55px;
   width: 365px;
   height: 51px;
   border-radius: 27px;
   border: 0;
   color: white;
   font-size: 18px;
   font-family: "IBM Plex Sans";
   font-weight: 300;
   font-style: normal; 
   :hover{
    cursor: pointer;
   }
}
`

export const Linha = styled.hr`
width: 363px;
height: 1px;
border: 0px;
background-image: linear-gradient(to right, #FF6489, #F9B24E);
margin: 15px 0px;
`

export const Botao = styled.button`
width: 365px;
height: 51px;
margin-bottom: 15px;
border-radius: 27px;
color: #FE7E02;
border: 1px solid #FE7E02;
background-color: white;
font-size: 18px;
font-family: "IBM Plex Sans";
font-weight: 300;
font-style: normal;
:hover{
    cursor: pointer;
   }
`

