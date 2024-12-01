import { Trash } from "@phosphor-icons/react";
import styled from "styled-components";

export const CartCardContainer = styled.div`
    display: flex;
    gap: 20px;
    padding: 30px;
    overflow-y: auto;
    max-height: 200px;
`;

export const CartCardImage = styled.img`
    width: 70px;
    height: 70px;
`;

export const CoffeInformationContainer = styled.div`
    & p 
    {

    }
`;

export const CoffeInformation = styled.div`

`;

export const CartCardCoffeeName = styled.div`
    
`;

export const AddAndRemoveContainer = styled.div`
    display: flex;
    gap: 10px;
    padding-top: 10px;
`;

export const RemoveCoffeeButtonContainer = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    padding: 10px;
    height: 35px;
    background-color: ${(props) => props.theme["base-button"]};
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.15s;

    &:active, &:hover, &:focus
    {
        outline: none;
        box-shadow: none;
    }

    &:hover
    {
        transform: scale(1.03);
    }
`;

export const StyledTrash = styled(Trash)`
    color: ${(props) => props.theme.purple};
`;

export const RemoveCoffeeLabel = styled.p`
    color: ${(props) => props.theme["base-text"]};
`;

export const RemoveCoffeeButton = styled.button`

`;