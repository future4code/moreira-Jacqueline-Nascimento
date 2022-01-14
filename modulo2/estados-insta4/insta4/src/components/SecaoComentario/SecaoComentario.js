import React, {Component} from 'react'
import styled from 'styled-components'

const CommentContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px; 
`

const ComentarioContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
	flex-direction: column;
`
const Lista = styled.ul`
	list-style: none;
`

const ItemDaLista = styled.li`
	border: 1px solid black;
	width: 80%;
	background: lightgrey;
	margin: 2px;
	padding: 2px;
`

const InputComentario = styled.input`
    width: 100%;
    margin-right: 5px;
`

export class SecaoComentario extends Component {
	state = {
		comentario: "",
		listaDeComentarios: []
	}

	adicionarComentario = () => {
		const novaLista = [...this.state.listaDeComentarios, this.state.comentario];
		this.setState({listaDeComentarios: novaLista})
		this.setState({comentario:""})
		this.props.aoEnviar()
	}

	onChangeComentario = (event) => {
		this.setState({comentario: event.target.value})
	}

	render() {
		console.log(this.state.comentario)
		const renderizarListaComentario = this.state.listaDeComentarios.map((item)=>{
			return <ItemDaLista>{item}</ItemDaLista>
		})

		return <ComentarioContainer>
			<CommentContainer>
				<InputComentario
					placeholder={'Comentário'}
					value={this.state.comentario}
					onChange={this.onChangeComentario}
				/>
				<button onClick={this.adicionarComentario}>Enviar</button>
			</CommentContainer>
			
			<Lista>{renderizarListaComentario}</Lista>
		</ComentarioContainer>
	}
}
