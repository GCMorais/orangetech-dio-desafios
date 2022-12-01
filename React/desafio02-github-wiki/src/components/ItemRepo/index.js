import React from 'react'
import { StyledRepoContainer } from './styles'

function ItemRepo() {
  return (
    <StyledRepoContainer>
        <h3>Ola</h3>
        <p>Mundo</p>
        <a href='#'>Ver Repositório</a><br/>
        <a href='#' className='remover'>Remover</a>
        <hr />
    </StyledRepoContainer>
  )
}

export default ItemRepo
