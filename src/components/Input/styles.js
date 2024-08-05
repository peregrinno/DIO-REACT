import styled from 'styled-components';

export const InputContainer = styled.div`
    width: 100%;
    height: 75px;
    background-color: #333;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    color: white;
    font-size: 36px;
    padding: 0 20px;
    border-radius: 10px;
    margin-bottom: 10px;

    input {
        width: 100%;
        height: 75px;
        background-color: transparent;
        font-size: 36px;
        font-family: 'Roboto';
        padding: 0 10px;
        border: 0;
        color: white;
        text-align: right;
    }
`;