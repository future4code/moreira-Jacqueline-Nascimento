import React from 'react';
import styled from 'styled-components';
import IconText from './IconText';

const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    width: 550px;
    padding: 10px;
    background-color: aqua;
`;

const HeaderFilho = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export function Header(){
    return (
        <HeaderContainer>
            <input type="text" placeholder="Pesquisar" />
            <HeaderFilho>
                <IconText imagem="https://cdn-icons-png.flaticon.com/512/25/25694.png" texto="Home" />
                <IconText imagem="http://cdn.onlinewebfonts.com/svg/img_489991.png" texto="Notificações" />
                <IconText imagem="https://image.flaticon.com/icons/png/512/17/17004.png" texto="Perfil" />
            </HeaderFilho>
        </HeaderContainer>
    )
}