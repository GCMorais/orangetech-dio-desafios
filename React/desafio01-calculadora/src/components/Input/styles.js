import styled from "styled-components";


export const StyledContainerInput = styled.div`
    width: 100%;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-size: 24px;
    font-family: Roboto;

    display: flex;
    flex-flow: column;
    justify-content: space-between;

    
    decoration{
        width: 40%;
        background-color: #2f2422;
        height: 30px;
        align-self: end;
        border-radius: 20px;
    }


    input {
        width: 100%;
        height: 75px;
        background-color: #1f1f23;
        border: 0;
        align-self: end;
        text-align: end;
        font-size: 24px;
        font-family: Roboto;
        color: #ffffff;
        border-radius: 20px;
        margin-bottom: 10px;
    }
`

