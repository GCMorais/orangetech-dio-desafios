import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #CACACA;
    background-image: url("background.png");
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
`


export const Content = styled.div`
    background-color: #0e0e10;
    width: 60%;
    border-radius: 20px;
    max-width: 340px;
    padding: 1rem;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

   
`
