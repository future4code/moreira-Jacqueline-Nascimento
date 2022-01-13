import React, {Component} from 'react'
import styled from 'styled-components'

const CompartilharContainer = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 5px;
`
const ButtonCompartilhar = styled.button`
    background-color: lightblue;
    margin: 0 5px;
    border-radius: 10px;
    width: 80px;
    cursor: pointer;
    :hover{
        opacity: .5;
    }
`
const InputComentario = styled.input`
    width: 150px;
    margin-right: 5px;
`

export class SecaoCompartilhar extends Component {
	state = {
		redesocial: "",
        comentario: ""
	}

	aoEnviar = (event) => {
		this.setState({redesocial: event.target.value});
	}

    onChangeComentario = (event) => {
		this.setState({comentario: event.target.value})
	}

	render() {
        if (this.state.redesocial!==""){
            console.log(`Post compartilhado no ${this.state.redesocial} com a mensagem: ${this.state.comentario}`)
        }
		return (
        // <CompartilharContainer>
		// 	   <ButtonCompartilhar value={'Instagram'} onClick={this.aoEnviar}>Instagram</ButtonCompartilhar>
        //     <ButtonCompartilhar value={'Facebook'} onClick={this.aoEnviar}>Facebook</ButtonCompartilhar>
        //     <ButtonCompartilhar value={'Twitter'} onClick={this.aoEnviar}>Twitter</ButtonCompartilhar>
		// </CompartilharContainer>
        <CompartilharContainer>
            <InputComentario
				placeholder={'Compartilhe'}
				value={this.state.comentario}
				onChange={this.onChangeComentario}
			/>
            <ButtonCompartilhar value={this.props.redesocial} onClick={this.aoEnviar}>{this.props.redesocial}</ButtonCompartilhar>
        </CompartilharContainer>
        )
	}
}
