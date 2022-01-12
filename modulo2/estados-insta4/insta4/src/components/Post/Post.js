import React from 'react'
import styled from 'styled-components'

import {IconeComContador} from '../IconeComContador/IconeComContador'
import {IconeSemContador} from '../IconeSemContador/IconeSemContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import iconeNaoSalvo from '../../img/bookmark_border_black_24dp.svg'
import iconeSalvo from '../../img/bookmark_black_24dp.svg'
import iconeEnviar from '../../img/send_black_24dp.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'
import {SecaoCompartilhar} from '../SecaoCompartilhar/SecaoCompartilhar'

const PostContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`

const PostHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`

const PostFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`

const UserPhoto = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`

const PostPhoto = styled.img`
  width: 100%;
`

const CurteComenta = styled.div`
  display: flex;
`

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    salvo: false,
    compartilhando: false
  }

  onClickSalvo = () => {
    this.setState({salvo: !this.state.salvo})
  }

  onClickCurtida = () => {
    console.log('Curtiu!')
    this.setState({curtido: !this.state.curtido})
    if(!this.state.curtido){
      this.setState({numeroCurtidas: this.state.numeroCurtidas+1})
    }else{
      this.setState({numeroCurtidas: this.state.numeroCurtidas-1})
    }
  }

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  onClickCompartilhar = () => {
    this.setState({
      compartilhando: !this.state.compartilhando
    })
  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }

  render() {
    //Parte escrita dentro do render e fora do return não foi mostrada na aula
    let iconeCurtida
    let iconeSalvar

    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    if(this.state.salvo) {
      iconeSalvar = iconeSalvo
    } else {
      iconeSalvar = iconeNaoSalvo
    }

    let componenteComentario
    let componenteCompartilhar1
    let componenteCompartilhar2
    let componenteCompartilhar3

    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }

    if(this.state.compartilhando) {
      componenteCompartilhar1 = <SecaoCompartilhar redesocial={'Instagram'} />
      componenteCompartilhar2 = <SecaoCompartilhar redesocial={'Facebook'} />
      componenteCompartilhar3 = <SecaoCompartilhar redesocial={'Twitter'} />
    }

    return <PostContainer>
      <PostHeader>
        <UserPhoto src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={this.props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <CurteComenta>
          <IconeComContador
            icone={iconeCurtida}
            onClickIcone={this.onClickCurtida}
            valorContador={this.state.numeroCurtidas}
          />

          <IconeComContador
            icone={iconeComentario}
            onClickIcone={this.onClickComentario}
            valorContador={this.state.numeroComentarios}
          />

          <IconeSemContador
            icone={iconeEnviar}
            onClickIcone={this.onClickCompartilhar}
          />
        </CurteComenta>

        <IconeSemContador
          icone={iconeSalvar}
          onClickIcone={this.onClickSalvo}
        />
      </PostFooter>
      {componenteComentario}
      {componenteCompartilhar1}
      {componenteCompartilhar2}
      {componenteCompartilhar3}
    </PostContainer>
  }
}

export default Post