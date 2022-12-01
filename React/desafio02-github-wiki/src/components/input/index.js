import React from 'react'
import { StyledInputContainer } from './styles'


function Input({value, onChange}) {
  return (
    <StyledInputContainer>
        <input placeholder="ex: GCMorais/orangetech-dio-desafios" value={value} onChange={onChange}/>
    </StyledInputContainer>
  )
}

export default Input