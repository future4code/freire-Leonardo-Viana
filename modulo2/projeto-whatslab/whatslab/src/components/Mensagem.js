import React from 'react'
import styled from 'styled-components'


const Layout = styled.div`
display:flex;
flex-direction: column-reverse;
height: 100%;
border: 1px solid black;
`

const CaixaTexto = styled.input`
width: 400px;
`
const CaixaUsuario = styled.input`
width: 150px;
`
const Mensagens = styled.div`
margin: 20px 40px;
font-family: sans-serif;
`
const Enviar = styled.button`
`

 class Mensagem extends React.Component {

    state = {
        mensagem: [{
            nome: "",
            conteudo: ""
        }],

        valorInputPessoa: "",
        valorInputConteudo: ""
    }

    adicionaMensagem = () => {
        const novaMensagem = {
            nome: this.state.valorInputPessoa,
            conteudo: this.state.valorInputConteudo            
        };
        

        const novoMensagens = [...this.state.mensagem, novaMensagem];

        this.setState({ mensagem: novoMensagens });
        this.setState({valorInputConteudo:""})
    };

    onChangeInputPessoa = (event) => {
        this.setState({ valorInputPessoa: event.target.value });
    };

    onChangeInputConteudo = (event) => {
        this.setState({ valorInputConteudo: event.target.value });
    }; 

    

    render() {        
        const listaDeComponentes = this.state.mensagem.map((chat) => {
            return (
                <p>
                    <b>{`${chat.nome}:`}</b> {chat.conteudo} 
                </p>
            );
        });

         
        return (
            <Layout>               
                <div>
                    <CaixaUsuario                       
                        value={this.state.valorInputPessoa}
                        onChange={this.onChangeInputPessoa}
                        placeholder={"Usuário"}
                    />
                    <CaixaTexto                        
                        value={this.state.valorInputConteudo}                       
                        onChange={this.onChangeInputConteudo}
                        placeholder={"Mensagem"}
                    />
                    <button onClick={this.adicionaMensagem}>Enviar</button>
                </div>
                <Mensagens>{listaDeComponentes}</Mensagens>
            </Layout>
        );
    };

};
export default Mensagem;




