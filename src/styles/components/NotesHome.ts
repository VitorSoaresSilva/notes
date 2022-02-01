import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex:1;
    flex-direction: column;
    @media (min-width: 600px) {
        flex-direction: row;
        height: 100vh;
    }
`;
export const Header = styled.div`
    display:flex;
    flex:1;
    flex-direction:row;
    justify-content: center;
    background-color: #e6adec;
    button{
        border-radius: 50%;
        font-size:2rem;
        margin: 5px;
        width: 3rem;
        height: 3rem;
        color: #222;
    }
    
    @media (min-width: 600px) {
        flex-direction: column;
        height: auto;
        justify-content:flex-start;
    }
`;

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0.5rem;
    align-items: center;

    @media (min-width: 600px) {
        flex: 18;
    }
`;


