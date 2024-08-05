import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Content = styled.div`
    background-color: #000;
    width: 320px;
    border-radius: 10px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Row = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin: 5px 0;
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`