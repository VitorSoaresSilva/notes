import styled from 'styled-components';

export const Container = styled.div`
    background: ${props => props.theme.colors.background.secondary};
    width: 20rem;
    border-radius: 1rem;
    padding: 1rem;
`;
export const Header = styled.div`
    display: flex;
    flex-direction: column;
    button{
        font-size:2rem;
    }
`;


export const Card = styled.div`
    display: flex;
    flex-direction:column;
    position:relative;
    padding: 1.2rem;
    margin-top: 0.5rem;
    border: 1px solid #000;
    border-radius: 1rem;
    .button-container{
        position:absolute;
        top:0px;
        right: 0px;
        button{
            margin-right:4px;
        }
    }
`;


export const Body = styled.div`
    border: 1px solid #000;
    border-radius: 1rem;
    padding: 1rem;
    margin-top:
`;


