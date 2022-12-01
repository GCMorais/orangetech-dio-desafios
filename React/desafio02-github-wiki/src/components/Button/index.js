import React from 'react'
import { StyledButtonContainer } from './styles'


function Button({onClick}) {
  return (
    <StyledButtonContainer onClick={onClick}>
        Buscar
    </StyledButtonContainer>
  )
}

export default Button