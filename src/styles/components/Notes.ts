import styled from 'styled-components';

export const Container = styled.div`
    background: ${props => props.color};
    width: 20rem;
    border-radius: 1rem;
    padding: 1rem;
    margin:10px 0px;

    hr{
        border-top: 2px solid #fff;
    }
    button{
        border-radius: 50%;
        padding: 3px;
        margin-left: 3px;
    }

`;
export const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    .info{
        font-size: 0.85rem;
        display: flex;
        flex-direction:column;
    }
    
`;

export const Body = styled.div`
    padding-top: 5px;
    textarea {
        width: 100%;
        height: 150px;
        padding: 2px 4px;
        box-sizing: border-box;
        border: 2px solid #ccc;
        border-radius: 4px;
        background-color: #f8f8f8;
        font-size: 16px;
        resize: none;
    }
`;


