import React from "react";
import styled from "styled-components";

const Botoes = styled.button`
    border-radius: 5px;
    cursor: pointer;
    background-color: lavenderblush;
    max-height: 25px;
    img {
        height: 100%;
    }
`


export default class Botao extends React.Component{

    render(){
        return <Botoes onClick={this.props.funcao}>{this.props.texto}</Botoes>
    }
}