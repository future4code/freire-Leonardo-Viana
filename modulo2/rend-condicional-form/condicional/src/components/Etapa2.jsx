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
    align-items: center;
    width: 200px;
    font-size: large;

    
`


export default class Etapa2 extends React.Component {
    render() {

        return (
            <Layout>
                <h2>Etapa 2 - Informações do Ensino Superior</h2>
                <ol type='1' start='5'>
                    <Topico>
                        Qual curso? <br />
                        <input />
                    </Topico>
                    <Topico>
                        Qual a unidade de ensino?<br />
                        <input />
                    </Topico>                   
                </ol>
                
            </Layout>

        )
    }


}