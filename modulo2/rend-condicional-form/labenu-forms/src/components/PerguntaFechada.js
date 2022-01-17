import React from "react";
import styled from "styled-components";

const CaixaDeTexto = styled.label`
    margin-right: 5px;
`
const Container = styled.div`
    padding: 5px;
`

export default class PerguntaFechada extends React.Component{

    render() {
        const renderizarLista = () =>{
            return this.props.lista.map((item,index)=>{
                return <option value={index}>{item}</option>})
        }

        return(
            <Container>
                <CaixaDeTexto htmlFor="pergunta">{this.props.pergunta}</CaixaDeTexto>
                <select name="pergunta" id="pergunta">
                    {renderizarLista()}
                </select>
            </Container>
        )
    }
}