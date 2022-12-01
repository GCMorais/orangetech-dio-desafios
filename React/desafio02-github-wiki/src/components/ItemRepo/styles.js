import styled from "styled-components";

export const StyledRepoContainer = styled.div`

    width: auto;
    min-width: 430px;
    max-width: 700px;
    display: flex;
    background-color: #FAFAFA;
    padding: 1rem;
    border-radius: 20px;
    margin: .5rem;
    justify-content: space-around;
    
    
    div{
        width: 100%;
        
        a{
            color: #FF0000;
            text-decoration: none;
        }
        
        h3{
            font-size: 25px;
            color: #00000080;
        }
        p{
            font-size: 16px;
            color: #00000060;
            margin-bottom: 20px;
        }
    }


    a.remover{
        color: #FF0000;
        text-decoration: none;
        padding-left: 1rem;
    }
    
    img{
        max-width: 100px;
        border-radius: 50%;
        padding-right: 1rem;
        align-self: center;
    }
`