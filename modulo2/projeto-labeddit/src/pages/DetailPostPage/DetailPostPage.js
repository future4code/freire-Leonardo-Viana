import React, { useState, useEffect } from "react";
import styled from "styled-components"
import { useNavigate, useParams } from 'react-router-dom'
import Up from "../../assets/like.png"
import Down from "../../assets/dislike.png"
import Chat from "../../assets/comment.png"
import { Bloco, Postagem, Post, Remetente, Conteudo, Reactions, Like, Dislike, Comment, Form, Texto, Botao, Linha, Respostas, Back, Header, Image, SignIn } from "./styled";
import { CreateComment, CreateCommentVote, CreatePostVote, GetPostComments, GetPosts } from "../../services/api";
import X from "../../assets/x.png"
import Logo from "../../assets/logo-header.png"
import { goToFeedPage, goToLoginPage } from "../../routes/coordinator";
import { Logout } from "../../components/Logout/logout";


const DetailsPostPage = () => {

    const navigate = useNavigate()
    const pathParams = useParams()
    const [post, setPost] = useState()
    const [comentario, setComentario] = useState()
    const [mensagem, setMensagem] = useState()

    useEffect(() => {
        GetPosts(setPost)
        GetPostComments(pathParams.id, setComentario)
        if(localStorage.getItem("token") == null) {
            goToLoginPage(navigate)
            window.location.reload()
        }
    })

    const onChangeMensagem = (ev) => {
        setMensagem(ev.target.value)
    }

    const Curtir = () => {
        let body = {
            direction: 1
        }
        CreatePostVote(pathParams.id, body)
    }

    const Descurtir = () => {
        let body = {
            direction: -1
        }
        CreatePostVote(pathParams.id, body)
    }

    const CurtirComment = (id) => {
        let body = {
            direction: 1
        }
        CreateCommentVote(id, body)
    }

    const DescurtirComment = (id) => {
        let body = {
            direction: -1
        }
        CreateCommentVote(id, body)
    }

    const Comentar = (ev) => {
        ev.preventDefault()
        let body = {
            body: mensagem
        }
        CreateComment(body, pathParams.id)
        // setMensagem('')

    }

    const formatacaoPost = () => {
        const postagem = post && post?.map((a) => {
            if (a.id == pathParams.id) {
                return <Post key={a.id}>
                    <Remetente>Enviado por: {a.username}</Remetente>
                    <Conteudo>{a.body}</Conteudo>
                    <Reactions>
                        <Like>
                            <button onClick={Curtir}><img src={Up} /></button>
                            <p><b>{a.voteSum}</b></p>
                        </Like>
                        <Dislike>
                            <button onClick={Descurtir}><img src={Down} /></button>
                        </Dislike>
                        <Comment>
                            <button><img src={Chat} /></button>
                            <p>{a.commentCount}</p>
                        </Comment>
                    </Reactions>
                </Post>
            }
        })
        return postagem
    }

    const formatacaoComentario = () => {
        return comentario && comentario?.map((a) => {
            return <Post key={a.id}>
                <Remetente>Enviado por: {a.username}</Remetente>
                <Conteudo>{a.body}</Conteudo>
                <Reactions>
                    <Like>
                        <button onClick={() => {CurtirComment(a.id)}}><img src={Up} /></button>
                        <p><b>{a.voteSum}</b></p>
                    </Like>
                    <Dislike>
                        <button onClick={() => {DescurtirComment(a.id)}}><img src={Down} /></button>
                    </Dislike>
                </Reactions>
            </Post>
        })
    }



    return (
        <div>
            <Header>
                <Back onClick={() => goToFeedPage(navigate)}>X</Back>
                <Image><img src={Logo} /></Image>
                <SignIn onClick={Logout}>Logout</SignIn>
            </Header>
            <Bloco>
                <Postagem>
                    {formatacaoPost()}
                </Postagem>
                <Form onSubmit={Comentar}>
                    <Texto placeholder="Adicionar comentário" onChange={onChangeMensagem} value={mensagem}></Texto>
                    <Botao type="submit">Responder</Botao>
                </Form>
                <Linha></Linha>
                <Respostas>
                    {formatacaoComentario()}
                </Respostas>

            </Bloco>
        </div>
    )
}

export default DetailsPostPage