import React from "react";
import { Header } from "../../components/Header/Header"
import styled from "styled-components"
import Up from "../../assets/like.png"
import Down from "../../assets/dislike.png"
import Chat from "../../assets/comment.png"
import { Bloco, Form, Texto, Botao, Linha, Feed, Post, Remetente, Conteudo, Reactions, Like, Dislike, Comment } from "./styled";
 

const FeedPage = () => {
    return(
        <div>
           <Header/>
            <Bloco>
                <Form>
                    <Texto placeholder="Escreva seu post..."></Texto>
                    <Botao>Postar</Botao>
                </Form>
                <Linha></Linha>
                <Feed>
                    <Post>
                        <Remetente>Enviado por: ...</Remetente>
                        <Conteudo>loremvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvgggggggggggggggggggggggggggg</Conteudo>
                        <Reactions>
                            <Like>
                                <button><img src={Up}/></button>
                                <p><b>?.?K</b></p>
                            </Like>
                            <Dislike>
                                <button><img src={Down}/></button>
                            </Dislike>
                            <Comment>
                                <button><img src={Chat}/></button>
                                <p>??</p>
                            </Comment>
                        </Reactions>
                    </Post>
                    <Post>
                        <Remetente>Enviado por: ...</Remetente>
                        <Conteudo>loremvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvgggggggggggggggggggggggggggg</Conteudo>
                        <Reactions>
                            <Like>
                                <button><img src={Up}/></button>
                                <p><b>?.?K</b></p>
                            </Like>
                            <Dislike>
                                <button><img src={Down}/></button>
                            </Dislike>
                            <Comment>
                                <button><img src={Chat}/></button>
                                <p>??</p>
                            </Comment>
                        </Reactions>
                    </Post>
                    <Post>
                        <Remetente>Enviado por: ...</Remetente>
                        <Conteudo>loremvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvgggggggggggggggggggggggggggg</Conteudo>
                        <Reactions>
                            <Like>
                                <button><img src={Up}/></button>
                                <p><b>?.?K</b></p>
                            </Like>
                            <Dislike>
                                <button><img src={Down}/></button>
                            </Dislike>
                            <Comment>
                                <button><img src={Chat}/></button>
                                <p>??</p>
                            </Comment>
                        </Reactions>
                    </Post>
                    <Post>
                        <Remetente>Enviado por: ...</Remetente>
                        <Conteudo>loremvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvgggggggggggggggggggggggggggg</Conteudo>
                        <Reactions>
                            <Like>
                                <button><img src={Up}/></button>
                                <p><b>?.?K</b></p>
                            </Like>
                            <Dislike>
                                <button><img src={Down}/></button>
                            </Dislike>
                            <Comment>
                                <button><img src={Chat}/></button>
                                <p>??</p>
                            </Comment>
                        </Reactions>
                    </Post>
                    <Post>
                        <Remetente>Enviado por: ...</Remetente>
                        <Conteudo>loremvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvgggggggggggggggggggggggggggg</Conteudo>
                        <Reactions>
                            <Like>
                                <button><img src={Up}/></button>
                                <p><b>?.?K</b></p>
                            </Like>
                            <Dislike>
                                <button><img src={Down}/></button>
                            </Dislike>
                            <Comment>
                                <button><img src={Chat}/></button>
                                <p>??</p>
                            </Comment>
                        </Reactions>
                    </Post>
                    <Post>
                        <Remetente>Enviado por: ...</Remetente>
                        <Conteudo>loremvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvgggggggggggggggggggggggggggg</Conteudo>
                        <Reactions>
                            <Like>
                                <button><img src={Up}/></button>
                                <p><b>?.?K</b></p>
                            </Like>
                            <Dislike>
                                <button><img src={Down}/></button>
                            </Dislike>
                            <Comment>
                                <button><img src={Chat}/></button>
                                <p>??</p>
                            </Comment>
                        </Reactions>
                    </Post>
                </Feed>

            </Bloco>
            
        </div>
    )
}

export default FeedPage