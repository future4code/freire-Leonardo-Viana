import React, {Component} from 'react'
import styled from 'styled-components'

const CommentContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
`

const InputComentario = styled.input`
    width: 100%;
    margin-right: 5px;
`

export class SecaoComentario extends Component {
	state = {
		InputComentario:""
	}

	onChangeComentario = (event) => {
		this.setState({ InputComentario: event.target.value})
	}

	registrarComentario () {
		console.log(this.state.InputComentario)
	}

	render() {
		return <CommentContainer>
			<InputComentario
				placeholder={'Comentário'}
				onChange={this.onChangeComentario}
				value={this.state.InputComentario}
				
			/>
			{console.log(this.state.InputComentario)}
			<button onClick={this.props.aoEnviar}>Enviar</button>
			
			
		</CommentContainer>
	}
}
