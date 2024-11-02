import { ShoppingCartSimple } from "@phosphor-icons/react";
import styled from "styled-components";

export const AddToCartButtonContainer = styled.button`
    background-color: ${(props) => props.theme["purple-dark"]};
    border: none;
    border-radius: 5px;
    padding: 5px;
    width: 40px;
    height: 40px;
    cursor: pointer;

    &:active, &:hover, &:focus
    {
        outline: none;
        box-shadow: none;
    }

    &:hover
    {
        transform: scale(1.05);
    }
`;

export const ShoppingCartSimpleStyled = styled(ShoppingCartSimple)`
    fill: ${(props) => props.theme.white};
`;