import React from 'react'
import styled from 'styled-components'

const IconContainer = styled.div`
	display: flex;
    align-items: center;
    justify-content: center;
`
const IconImage = styled.img`
	margin-right: 5px;
    height: 50%;
`

export function IconeSemContador(props) {
	return <IconContainer>
		<IconImage alt={'Icone'} src={props.icone} onClick={props.onClickIcone}/>
	</IconContainer>
}
