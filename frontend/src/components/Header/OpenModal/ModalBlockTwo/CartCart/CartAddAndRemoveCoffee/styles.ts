import styled from "styled-components";

export const AddOrRemoveCoffeeContainer = styled.div`
    display: flex;
    gap: 10px;
    background-color: ${(props) => props.theme["base-button"]};
    height: 35px;
    border-radius: 5px;
    align-items: center;
    padding-left: 10px;
    padding-right: 10px;
`;

export const LessCoffee = styled.button`
    background-color: transparent;
    color: ${(props) => props.theme["purple-dark"]};
    border: 0;
    font-size: 1.5rem;
    font-family: 'Baloo 2';
    cursor: pointer;

    &:hover
    {
        transform: scale(1.3);
    }

    &:focus, &:active
    {
        outline: none;
        box-shadow: none;
    }
`;

export const CoffeeAmount = styled.p`

`;

export const MoreCoffee = styled.button`
    background-color: transparent;
    color: ${(props) => props.theme["purple-dark"]};
    border: 0;
    font-size: 1.5rem;
    font-family: 'Baloo 2';
    cursor: pointer;

    &:hover
    {
        transform: scale(1.3);
    }

    &:focus, &:active
    {
        outline: none;
        box-shadow: none;
    }
`;