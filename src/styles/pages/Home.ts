import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column; 
    background-color: #c287e8;
    h1{
        text-align:center;
        padding: 1rem;
        font-family: Roboto, sans-serif;
        background-color: #e6adec;
    }
`;

export const Content = styled.div`
    display: flex;
    flex:1;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
`;