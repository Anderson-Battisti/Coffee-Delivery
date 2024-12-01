import styled from "styled-components";

export const BlockTwo = styled.div`

`;

export const BlockTwoTitle = styled.p`
    font-size: 15px;
    font-family: 'Baloo 2';
    font-weight: bolder;
    color: ${(props) => props.theme["base-title"]};
`;

export const BlockTwoBox = styled.div`
    background-color: ${(props) => props.theme["base-input"]};
    margin-top: 10px;
    border-radius: 10px;
    padding: 25px;
    border-top-right-radius: 50px;
    border-bottom-left-radius: 50px;
`;

export const CoffeeBlock = styled.div`
    overflow-y: auto;
    max-height: 280px;
`;

export const StyledHr = styled.hr`
    border-color: ${(props) => props.theme.background};
    margin-bottom: 20px;
`;