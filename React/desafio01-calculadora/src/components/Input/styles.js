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
        background-color: #649e76;
        height: 30px;
        align-self: end;
        border-radius: 20px;
    }


    input {
        width: 100%;
        height: 75px;
        background-color: #1f1f23;
        border: 0;
        text-align: end;
        padding: 0 10px;
        font-size: 40px;
        font-family: Roboto;
        color: #ffffff;
        border-radius: 20px;
        margin-bottom: 10px;
    }
`

