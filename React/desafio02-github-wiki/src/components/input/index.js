import React from 'react'
import { StyledInputContainer } from './styles'


function Input({value, onChange}) {
  return (
    <StyledInputContainer>
        <input value={value} onChange={onChange}/>
    </StyledInputContainer>
  )
}

export default Input