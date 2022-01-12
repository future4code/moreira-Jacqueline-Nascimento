import React, {Component} from 'react'
import styled from 'styled-components'

const CompartilharContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
`


export class SecaoCompartilhar extends Component {
	state = {
		redesocial: ""
	}

	onChangeButton = (event) => {
		this.setState({redesocial: event.target.value})
        console.log(`Post compartilhado no ${this.state.redesocial}`)
	}

	render() {
		console.log(this.state.comentario)
		return <CompartilharContainer>
			<button value={'Instagram'} onChange={this.onChangeButton} onClick={this.props.aoEnviar}>Instagram</button>
            <button value={'Facebook'} onChange={this.onChangeButton} onClick={this.props.aoEnviar}>Facebook</button>
            <button value={'Twitter'} onChange={this.onChangeButton} onClick={this.props.aoEnviar}>Twitter</button>
		</CompartilharContainer>
	}
}
