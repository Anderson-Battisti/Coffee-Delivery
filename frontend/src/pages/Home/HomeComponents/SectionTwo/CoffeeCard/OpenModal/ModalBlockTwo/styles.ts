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
`;