import { MapPinLine } from "@phosphor-icons/react";
import styled from "styled-components";

export const AddressContainer = styled.div`
    display: flex;
    padding: 20px;
    gap: 5px;
`;

export const MapPinStyled = styled(MapPinLine)`
    color: ${(props) => props.theme["yellow-dark"]};
`;

export const TextBox = styled.div`
    
`;

export const AddressTitle = styled.div`
    color: ${(props) => props.theme["base-title"]};
    font-size: 16px;
`;

export const AddressText = styled.div`
    font-size: 14px;
`;