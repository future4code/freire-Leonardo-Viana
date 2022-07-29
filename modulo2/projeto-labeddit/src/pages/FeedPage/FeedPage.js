import React, { useEffect, useState } from "react";
import Up from "../../assets/like.png"
import Down from "../../assets/dislike.png"
import Chat from "../../assets/comment.png"
import { Bloco, Form, Texto, Botao, Linha, Feed, Post, Remetente, Conteudo, Reactions, Like, Dislike, Comment, Header, Image, SignIn } from "./styled";
import { useNavigate } from "react-router-dom";
import { CreatePost, CreatePostVote, GetPosts } from "../../services/api";
import { goToDetailPostPage, goToLoginPage } from "../../routes/coordinator";
import Logo from "../../assets/logo-header.png"
import { Logout } from "../../components/Logout/logout"
import "./styled.css" 


const FeedPage = () => {

    const navigate = useNavigate()

    const [post, setPost] = useState()
    const [mensagem, setMensagem] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        GetPosts(setPost)
        if(localStorage.getItem("token") == null) {
            goToLoginPage(navigate)
            window.location.reload()
        }
    })

    const onChangeMensagem = (ev) => {
        setMensagem(ev.target.value)
    }


    const Postar = (ev) => {
        ev.preventDefault()
        let body = {
            title: 'PostagemX',
            body: mensagem
        }
        CreatePost(body, setIsLoading)
        setMensagem('')
    }


    const Curtir = (id) => {
        let body = {
            direction: 1
        }
        CreatePostVote(id, body)
    }

    const Descurtir = (id) => {
        let body = {
            direction: -1
        }
        CreatePostVote(id, body)
    }

    const LoadingSpinner = () => {
        return <div className="spinner-container-feed">
        <div className="loading-spinner-feed">
        </div>
      </div>
    }

    const formatacaoPosts = () => {
        return post && post?.map((a) => {
            return <Post key={a.id}>
                <Remetente>Enviado por: {a.username}</Remetente>
                <Conteudo>{a.body}</Conteudo>
                <Reactions>
                    <Like>
                        <button onClick={() => Curtir(a.id)}><img src={Up} /></button>
                        <p><b>{a.voteSum}</b></p>
                    </Like>
                    <Dislike>
                        <button onClick={() => Descurtir(a.id)}><img src={Down} /></button>
                    </Dislike>
                    <Comment>
                        <button onClick={() => goToDetailPostPage(navigate, a.id)}><img src={Chat} /></button>
                        <p>{a.commentCount}</p>
                    </Comment>
                </Reactions>
            </Post>
        })
    }

    return (
        <div>
            <Header>               
                <Image><img src={Logo} /></Image>
                <SignIn onClick={Logout}>Logout</SignIn>
            </Header>
            <Bloco>
                <Form onSubmit={Postar}>
                    <Texto placeholder="Escreva seu post..." onChange={onChangeMensagem} value={mensagem}></Texto>
                    <Botao>{isLoading ? LoadingSpinner() : <>Postar</>  }</Botao>
                </Form>
                <Linha></Linha>
                <Feed>
                    {post ? formatacaoPosts() : LoadingSpinner() }
                </Feed>

            </Bloco>

        </div>
    )
}

export default FeedPage