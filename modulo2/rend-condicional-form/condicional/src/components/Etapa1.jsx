import React from 'react'
import styled from 'styled-components'

const Layout = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
`

const Topico = styled.li`
    margin: auto;
    padding: 20px 0px;
    justify-content: center;
    width: 200px;
    font-size: large;

    
`


export default class Etapa1 extends React.Component {

     

    render() {

        return (
            <Layout>
                <h2>Etapa 1 - Dados Gerais</h2>
                <ol>
                    <Topico>
                        Qual o seu nome? <br />
                        <input />
                    </Topico>
                    <Topico>
                        Qual a sua idade?<br />
                        <input />
                    </Topico>
                    <Topico>
                        Qual seu email?<br />
                        <input />
                    </Topico>
                    <Topico>
                        Qual a sua escolaridade?<br />
                        <form>
                            <label for="ensino"></label>
                            <input list='ensinos' name='ensino' id='ensino'/>
                        </form>
                        <datalist id='ensinos'>
                            <option>Ensino médio completo</option>
                            <option>Ensino médio incompleto</option>
                            <option>Ensino superior completo</option>
                            <option>Ensino superior incompleto</option>
                        </datalist>
                    </Topico>
                </ol>                                             
            </Layout>

        )
    }


}