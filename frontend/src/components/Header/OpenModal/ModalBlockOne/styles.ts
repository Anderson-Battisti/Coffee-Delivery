import styled from "styled-components";

export const BlockOne = styled.div`

`;

export const BlockOneTitle = styled.p`
    font-size: 15px;
    font-family: 'Baloo 2';
    font-weight: bolder;
    color: ${(props) => props.theme["base-title"]};
`;

export const BlockOneBox = styled.div`
    background-color: ${(props) => props.theme["base-input"]};
    margin-top: 10px;
    border-radius: 10px;
`;


