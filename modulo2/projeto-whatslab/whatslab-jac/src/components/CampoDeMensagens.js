import React from "react";
import styled from "styled-components";
import iconeEnviar from "../img/icone-enviar.png";
import iconeVisualizar from "../img/doublecheck.svg"

const Principal = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    margin: 10px;
`
const Footer = styled.form`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 5px;
`
const InputDeMensagem = styled.input`
    flex-grow: 1;
    margin-left: 10px;
    height: 40px;
    border-radius: 5px;
    border: none;
    font-size: large;
`
const InputDoUsuario = styled.input`
    height: 40px;
    border-radius: 5px;
    border: none;
    width: 20%;
    font-size: large;
`

const BotaoDeEnviar = styled.button`
    box-sizing: border-box;
    height: 40px;
    margin-left: 10px;
    padding: 5px;
    cursor: pointer;
    border-radius: 5px;
    border: none;
    background-color: #48D1CC;
`
const Icones = styled.img`
    height: 100%;
`

const BalaoTipoEU = styled.div`
    background-color: #836FFF;
    align-self: flex-end;
    margin-right: 10px;
    max-width: 60%;
    min-width: 8%;
    margin-bottom: 5px;
    word-wrap: break-word;
    padding: 0.9em 0.8em;
    border-radius: 0.5em;
    font-weight: 450;
    line-height: 1.3;
    box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.2);
    position: relative;
    :after {
        content: '';
        border: 15px solid transparent;
        border-top-color: black;
        position: absolute;
        top: 0px;
        right: -8px;
        border-top-color: #836FFF;
    }
`
const BalaoTipo = styled.div`
    background-color: #90EE90;
    align-self: flex-start;
    margin-left: 10px;
    max-width: 60%;
    min-width: 8%;
    margin-bottom: 5px;
    word-wrap: break-word;
    padding: 0.9em 0.8em;
    border-radius: 0.5em;
    font-weight: 450;
    line-height: 1.3;
    box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.2);
    position: relative;
    :after {
        content: '';
        border: 15px solid transparent;
        border-top-color: black;
        position: absolute;
        top: 0px;
        left: -8px;
        border-top-color: #90EE90;
    }
`
const Doublecheck = styled.img`
    position: absolute;
    height: 0.5em;
    right: 4px;
    bottom: 4px;
`

const TituloUsuario = styled.div`
    color: #006400;
    font-weight: bold;
    margin-bottom: 2px;
`


class CampoDeMensagens extends React.Component{
    state = {
        listaDeConversas: [{usuario:"eu", mensagem:"sasass"},{usuario:"edfd", mensagem:"sdsass"}],
        inputUsuario: "",
        inputMensagem: ""
    }

    addConversa = ()=>{
        const novaLista = [...this.state.listaDeConversas,
            {usuario: this.state.inputUsuario, mensagem: this.state.inputMensagem}]
        this.setState({listaDeConversas: novaLista, inputUsuario:"", inputMensagem:""})
    }

    pegarUsuario = (event) =>{
        this.setState({inputUsuario: event.target.value})
    }

    pegarMensagem = (event) =>{
        this.setState({inputMensagem: event.target.value})
    }

    addConversaEnter = (event)=>{
        if(event.key==="Enter"){
            this.addConversa()
        }
    }

    deletarMensagem = (chave) =>{
        const novaListaDeletada = [...this.state.listaDeConversas].filter(
            (item, index)=>{
                return index !== chave
            }
        )
        if (window.confirm("Tem certeza que deseja deletar essa mensagem?")){
            this.setState({listaDeConversas: novaListaDeletada})
        }        
    }

    render(){
        const baloesDeConversa = this.state.listaDeConversas.map((item, index)=>{
            if (item.usuario ==='eu'){
                return (<BalaoTipoEU key={index}
                            onDoubleClick={() => this.deletarMensagem(index)}>
                            {item.mensagem} <Doublecheck src={iconeVisualizar} alt="icone-de-visualizar"/>
                        </BalaoTipoEU>)
            } else {
                return (<BalaoTipo key={index} onDoubleClick={() => this.deletarMensagem(index)}>
                    <TituloUsuario>{item.usuario}</TituloUsuario>
                    <div>{item.mensagem}</div>
                </BalaoTipo>)
            }
        })

        return <Principal>
            {baloesDeConversa}
            <Footer action="#">
                <InputDoUsuario
                    placeholder="Usuário" 
                    value={this.state.inputUsuario} 
                    onChange={this.pegarUsuario} />
                <InputDeMensagem 
                    placeholder="Mensagem" 
                    value={this.state.inputMensagem} 
                    onChange={this.pegarMensagem} />
                <BotaoDeEnviar onKeyUp={this.addConversaEnter} onClick={this.addConversa}>
                    <Icones src={iconeEnviar} alt="icone-de-enviar" />
                </BotaoDeEnviar>
            </Footer>
            
        </Principal>
    }
} export default CampoDeMensagens