import styled from "styled-components";

export const SectionTwoContainer = styled.div`
    background-color: ${(props) => props.theme.background};
    padding-top: 100px;
`;

export const CoffeeCardsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-content: center;
    padding-top: 50px;
    gap: 50px;
`;

export const SectionTwoTitle = styled.p`
    font-size: 50px;
    font-family: 'Baloo 2';
    font-weight: bold;
    color: ${(props) => props.theme["base-title"]};
`;