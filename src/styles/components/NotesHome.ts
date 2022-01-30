import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
`;
export const Header = styled.div`
    background-color: #e6adec;
    align-items:center;;
    flex:1;
    display:flex;
    flex-direction:column;
    min-height: 100vh;
    height:auto;
    button{
        border-radius: 50%;
        font-size:2rem;
        margin: 5px;
        width: 3rem;
        height: 3rem;
        color: #222;
    }
`;



export const Body = styled.div`
    flex:18;
    padding: 1rem;
`;


