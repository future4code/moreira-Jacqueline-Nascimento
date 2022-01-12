import React from 'react'
import styled from 'styled-components'

const IconContainer = styled.div`
	display: flex;
`
const IconImage = styled.img`
	margin-right: 5px;
`

const ParagrafoContador = styled.p`
	margin-right: 10px;
`

export function IconeComContador(props) {
	return <IconContainer>
		<IconImage alt={'Icone'} src={props.icone} onClick={props.onClickIcone}/>
		<ParagrafoContador>{props.valorContador}</ParagrafoContador>
	</IconContainer>
}
