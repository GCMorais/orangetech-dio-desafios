import React from 'react'
import { StyledRepoContainer } from './styles'
import { CiCircleRemove } from "react-icons/ci";


function ItemRepo({repo}) {
  return (
      <StyledRepoContainer>
          <img src={repo.owner.avatar_url} alt="GCM foto"></img>

          <div>
            <h3>{repo.name}</h3>
            <p>{repo.full_name}</p>
            <a href={repo.html_url} rel="noreferrer" target="_blank" >Ver Repositório</a><br/>
          </div>
          
          <a href='#' className='remover'><CiCircleRemove /></a>
      </StyledRepoContainer>
  )
}

export default ItemRepo
