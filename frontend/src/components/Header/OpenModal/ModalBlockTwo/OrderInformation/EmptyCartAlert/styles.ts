import { Warning } from "@phosphor-icons/react";
import styled from "styled-components";

export const EmptyCartAlertContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: start;
    padding-top: 1%;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(5px);
    z-index: 999;
    position: fixed;
`;

export const AlertCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 35%;
    height: 35%;
    background-color: ${(props) => props.theme.yellow};
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    border-radius: 15px;
`;

export const StyledWarning = styled(Warning)`
    color: black;
`;

export const EmptyCartAlertButton = styled.button`
    color: black;
    background-color: ${(props) => props.theme["yellow-light"]};
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 5px;
    padding-bottom: 5px;
    border-radius: 5px;
    border: none;
    transition: 0.05s;
    &:hover
    {
        transform: scale(1.05);
        cursor: pointer;
    }
    &:active&:focus
    {
        border: none;
        box-shadow: none;
    }
`;

export const EmptyCartAlertTitle = styled.p`
    font-size: 20px;
`;

export const EmptyCartAlertText = styled.p`
    text-align: center;
`;

export const EmptyCartAlertTextContainer = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Baloo 2';
    color: black;
`;