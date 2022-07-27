import React from "react";
import styled from "styled-components"
import { Header } from "../../components/Header/Header";
import Up from "../../assets/like.png"
import Down from "../../assets/dislike.png"
import Chat from "../../assets/comment.png"
import { Bloco, Postagem, Post, Remetente, Conteudo, Reactions, Like, Dislike, Comment, Form, Texto, Botao, Linha, Respostas } from "./styled";


const DetailsPostPage = () => {
    return (
        <div>
            <Header />
            <Bloco>
                <Postagem>
                    <Post>
                        <Remetente>Enviado por: ...</Remetente>
                        <Conteudo>loremvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvgggggggggggggggggggggggggggg</Conteudo>
                        <Reactions>
                            <Like>
                                <button><img src={Up} /></button>
                                <p><b>?.?K</b></p>
                            </Like>
                            <Dislike>
                                <button><img src={Down} /></button>
                            </Dislike>
                            <Comment>
                                <button><img src={Chat} /></button>
                                <p>??</p>
                            </Comment>
                        </Reactions>
                    </Post>
                </Postagem>
                <Form>
                    <Texto placeholder="Adicionar comentário"></Texto>
                    <Botao>Responder</Botao>
                </Form>
                <Linha></Linha>
                <Respostas>
                    <Post>
                        <Remetente>Enviado por: ...</Remetente>
                        <Conteudo>loremvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvgggggggggggggggggggggggggggg</Conteudo>
                        <Reactions>
                            <Like>
                                <button><img src={Up} /></button>
                                <p><b>?.?K</b></p>
                            </Like>
                            <Dislike>
                                <button><img src={Down} /></button>
                            </Dislike>                           
                        </Reactions>
                    </Post>
                    <Post>
                        <Remetente>Enviado por: ...</Remetente>
                        <Conteudo>loremvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvgggggggggggggggggggggggggggg</Conteudo>
                        <Reactions>
                            <Like>
                                <button><img src={Up} /></button>
                                <p><b>?.?K</b></p>
                            </Like>
                            <Dislike>
                                <button><img src={Down} /></button>
                            </Dislike>                           
                        </Reactions>
                    </Post>
                    <Post>
                        <Remetente>Enviado por: ...</Remetente>
                        <Conteudo>loremvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvgggggggggggggggggggggggggggg</Conteudo>
                        <Reactions>
                            <Like>
                                <button><img src={Up} /></button>
                                <p><b>?.?K</b></p>
                            </Like>
                            <Dislike>
                                <button><img src={Down} /></button>
                            </Dislike>                           
                        </Reactions>
                    </Post>
                    <Post>
                        <Remetente>Enviado por: ...</Remetente>
                        <Conteudo>loremvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvgggggggggggggggggggggggggggg</Conteudo>
                        <Reactions>
                            <Like>
                                <button><img src={Up} /></button>
                                <p><b>?.?K</b></p>
                            </Like>
                            <Dislike>
                                <button><img src={Down} /></button>
                            </Dislike>                           
                        </Reactions>
                    </Post>
                    <Post>
                        <Remetente>Enviado por: ...</Remetente>
                        <Conteudo>loremvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvgggggggggggggggggggggggggggg</Conteudo>
                        <Reactions>
                            <Like>
                                <button><img src={Up} /></button>
                                <p><b>?.?K</b></p>
                            </Like>
                            <Dislike>
                                <button><img src={Down} /></button>
                            </Dislike>                           
                        </Reactions>
                    </Post>
                </Respostas>
                
            </Bloco>
        </div>
    )
}

export default DetailsPostPage