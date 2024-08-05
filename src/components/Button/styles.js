import styled from 'styled-components';

export const ButtonContainer = styled.button`
    padding: 20px;
    margin: 5px;
    border: 0;
    font-size: 20px;
    font-weight: bold;
    border-radius: 50%;
    color: #454545;
    flex: 1;
    transition: 0.3s;

    ${({ isOperator }) => isOperator && `
        background-color: #ff9500;
        color: white;
    `}

    ${({ isSpecial }) => isSpecial && `
        background-color: #a5a5a5;
        color: black;
    `}

    ${({ isZero }) => isZero && `
        width: calc(50% - 10px);
        border-radius: 50px;
    `}

    ${({ isZero }) => isZero && `
        text-align: start;
        flex: 4; 
        border-radius: 50px; 
    `}

    &:hover {
        opacity: 0.8;
    }
`;