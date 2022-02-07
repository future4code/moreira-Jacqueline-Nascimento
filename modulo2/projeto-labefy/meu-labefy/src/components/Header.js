import React, { Component } from 'react';
import IconeBig from './IconeBig';
import mixer from '../assets/mixer.png';
import lupa from '../assets/lupa.png';
import home from '../assets/home.jpg';
import plus from '../assets/plus.jpg';
import { ContainerHeader, DivHeader } from './Styled';
import IconeSmall from './IconeSmall';
import gif from '../assets/gifMixer.gif'

export default class Header extends Component {
  render() {
    return (
    <ContainerHeader>
        <IconeBig texto={'Labefy'} imagem={gif} />
        <DivHeader>
          <IconeSmall onClickF={this.props.irParaHome} texto={'Home'} imagem={home} />
          <IconeSmall onClickF={this.props.irParaPesquisa} texto={'Search'} imagem={lupa} />
          <IconeSmall onClickF={this.props.irParaCriar} texto={'Create Playlist'} imagem={plus} />
        </DivHeader>
        {/* <img src={gif}/> */}
    </ContainerHeader>);
  }
}
