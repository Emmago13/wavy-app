import styled from "styled-components";

const Container = styled.div`
    width: 200px;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #ffffff;
    color: ${props=>props.color};
    border-radius: 10px;
`;

const Icon = styled.div`
    color: inherit;
`;

const Label = styled.div`
    color: inherit;
    font-size: 16px;
    margin-top: 10px;
`;

export {Container, Icon, Label}