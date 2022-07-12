import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { goToHome } from '../routes/coordinator'

const BlocoBotao = styled.div`
`

function LoginPage() {

    const navigate = useNavigate()

    // const goBack = () => {
    //     navigate("/")
    // }

    return (
        <div>
           <p>LoginPage</p>
           <BlocoBotao>
            <button onClick={() => goToHome(navigate)}>Voltar</button>
            <button>Entrar</button>
           </BlocoBotao>
            </div>
    )
}

export default LoginPage 