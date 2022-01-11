import React from 'react';
import styled from 'styled-components';

const IconTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 30px;
    padding: 0 10px;
`;

const Logo = styled.img`
    height: 20px;
    margin-right: 10px;
    cursor: pointer;
    :hover {
        opacity: .5;
    }
`;

function ImagemButton(props) {
    return (
        <IconTextContainer>
            <Logo src={ props.imagem }/>
            <p>{ props.texto }</p>
        </IconTextContainer>

    )
}

export default ImagemButton;