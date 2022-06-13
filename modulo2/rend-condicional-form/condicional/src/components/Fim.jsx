import React from 'react'
import styled from 'styled-components'

const Layout = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
`




export default class Etapa4 extends React.Component {
    render() {

        return (
            <Layout>
                <h2>O formulário acabou</h2>
                <p>Muito obrigado por participar! Entraremos em contato!</p>
            </Layout>

        )
    }


}