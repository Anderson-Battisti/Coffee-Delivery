import styled from "styled-components";

export const SectionTwoContainer = styled.div`
    background-color: ${(props) => props.theme.background};
    padding-top: 100px;
`;

export const CoffeeCardsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    padding-top: 50px;
`;

export const SectionTwoTitle = styled.p`
    font-size: 50px;
`;