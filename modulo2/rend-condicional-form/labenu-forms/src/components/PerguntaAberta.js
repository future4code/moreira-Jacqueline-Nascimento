import React from "react";
import styled from "styled-components";

const CaixaDeTexto = styled.input`
    margin-left: 5px;
`
const Container = styled.div`
    padding: 5px;
`

export default class PerguntaAberta extends React.Component{

    render() {
        return(
            <Container>
                <label htmlFor="pergunta">{this.props.pergunta}</label>
                <CaixaDeTexto id="pergunta" type="text" />
            </Container>
        )
    }
}