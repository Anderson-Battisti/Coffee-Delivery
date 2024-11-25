import { ShoppingCartSimple, X } from "@phosphor-icons/react";
import styled from "styled-components";

export const AddToCartButton = styled.button`
    background-color: ${(props) => props.theme["purple-dark"]};
    border: none;
    border-radius: 5px;
    padding: 5px;
    width: 35px;
    height: 35px;
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

export const ModalContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(3px);
    z-index: 999;
    position: fixed;
`;

export const XStyled = styled(X)`
    color: ${(props) => props.theme["purple-dark"]};
    position: absolute;
    top: 45px;
    right: 165px;

    &:hover 
    {
        cursor: pointer;
        color: ${(props) => props.theme["yellow-dark"]}
    }
`;