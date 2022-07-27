import styled from "styled-components"

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

export const Postagem = styled.div`
margin-top: 30px;
`

export const Post = styled.div`
display: flex;
flex-direction: column;
width: 364px;
background-color: #FBFBFB;
border: 1px solid #E0E0E0;
flex-wrap: wrap;
margin-bottom: 10px;
`

export const Remetente = styled.p`
margin: 10px 0px 0px 10px;
font-size: 12px;
color: #6F6F6F;
`

export const Conteudo = styled.span`
margin: 20px 0px 0px 10px;
font-size: 18px;
max-width: 335px;
word-wrap: break-word;
`

export const Reactions = styled.div`
margin: 20px 0px 0px 10px;
display: flex;
align-items: center;
`

export const Like = styled.div`
display: flex;
justify-content: center;
align-items: center;

button{   
    color: #6F6F6F;
    border: 0;
    background-color: #FBFBFB;
    :hover{
        cursor: pointer;
    }
    img{
        width: 14px;
        height: 14px;
    }
}
p{
    font-size: 10px;
    color: #6F6F6F;
    margin-left: 5px;
}
`

export const Dislike = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin: 0px 20px;
button{   
    color: #6F6F6F;
    border: 0;
    background-color:  #FBFBFB;
    :hover{
        cursor: pointer;
    }
    img{
        width: 14px;
        height: 14px;
    }
}
`

export const Comment = styled.div`
display: flex;
justify-content: center;
align-items: center;
button{   
    color: #6F6F6F;
    border: 0;
    background-color: #FBFBFB;
    :hover{
        cursor: pointer;
    }
    img{
        width: 14px;
        height: 14px;
    }
}
p{
    font-size: 10px;
    color: #6F6F6F;
    margin-left: 5px;
}
`

export const Form = styled.form`
margin-top: 10px;
display: flex;
flex-direction: column;
align-items: center;
`

export const Texto = styled.textarea`
width: 354px;
height: 121px;
border-radius: 12px;
background-color: #EDEDED;
border: 0;
padding: 10px;
font-size: 18px;
font-family: "IBM Plex Sans";
font-weight: 300;
font-style: normal;
`

export const Botao = styled.button`
background-image: linear-gradient(to right, #FF6489, #F9B24E);
margin-top: 15px;
width: 359px;
height: 47px;
border-radius: 12px;
border: 0;
color: white;
font-size: 18px;
font-family: "IBM Plex Sans";
font-weight: 300;
font-style: normal;
:hover{
    cursor: pointer;
}
`

export const Linha = styled.hr`
width: 363px;
height: 1px;
border: 0px;
background-image: linear-gradient(to right, #FF6489, #F9B24E);
margin: 15px 0px;
`

export const Respostas = styled.div`
margin: 30px 0px;
display: flex;
flex-direction: column;
`

export const Back = styled.button`
width: 25.5px;
height: 24px;
margin-left: 34px;
border: 0;
img{
    width: 25.5px;
    height: 24px; 
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
`