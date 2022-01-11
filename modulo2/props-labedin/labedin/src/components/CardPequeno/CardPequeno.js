import React from 'react';
import styled from 'styled-components';

const SmallcardContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 60px;
`;

const Logo = styled.img`
    width: 40px;
    margin: 10px;
`;

const EspacamentoLateral = styled.h4`
    margin-right: 15px;
`;

const SmaallcardFilho = styled.div`
    display: flex;
`;

function CardPequeno(props) {
    return (
        <SmallcardContainer>
            <Logo src={ props.imagem } />
            <SmaallcardFilho>
                <EspacamentoLateral>{ props.nome }</EspacamentoLateral>
                <p>{ props.descricao }</p>
            </SmaallcardFilho>
        </SmallcardContainer>
    )
}

export default CardPequeno;