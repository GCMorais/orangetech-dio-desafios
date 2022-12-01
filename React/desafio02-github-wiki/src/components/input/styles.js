import styled from "styled-components";

export const StyledInputContainer = styled.div`

    height: 62px;
    width: 80%;
    max-width: 600px;

    

    input{
        background-color: transparent;
        border: 1px solid #FAFAFA;
        border-radius: 50px;
        padding: 0 20px;

        width: 93%;
        height: 45px;

        color: white;
        font-size: 20px;

        transition: all .3s ease-in-out;

        &:hover{
            opacity: .5;
            transition: all .3s ease-in-out;
        }
    }

`
