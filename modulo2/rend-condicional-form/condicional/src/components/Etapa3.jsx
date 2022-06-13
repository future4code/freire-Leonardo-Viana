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
   
`

const Centralizar = styled.ol`
text-align: center;
font-size: large;
    /* justify-self: center;
    margin: auto; */
`


export default class Etapa3 extends React.Component {
    render() {

        return (
            <Layout>
                <h2>Etapa 3 - Informações Gerais de Ensino</h2>
                <Centralizar type='1' start='7'>
                    <Topico>
                        Por que você não terminou um curso de graduação<br />
                        <input />
                    </Topico>
                    <Topico>
                        Você fez algum curso complementar?<br />
                        <form>
                            <label for="curso"></label>
                            <input list='cursos' name='curso' id='curso'/>
                        </form>
                        <datalist id='cursos'>
                            <option>Nenhum</option>
                            <option>Curso de inglês</option>
                            <option>Curso técnico</option>                            
                        </datalist>
                    </Topico>
                </Centralizar>
               
            </Layout>

        )
    }


}