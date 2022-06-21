import React from 'react';
import styled from 'styled-components'

export default class Lista extends React.Component {
    render() {
        const listaFormatada = this.props.lista.map((usuarios) => {
            return (
                <li>
                    {usuarios.name}<button>Deletar</button>
                </li>
            )
        })

        return (
            <div>
                <h1>Lista de Usuários</h1>
                <ul>
                    {listaFormatada}
                </ul>
                <button>Voltar</button>
            </div>

        )
    }

}

