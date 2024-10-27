import { MapPin } from "@phosphor-icons/react";
import { ShoppingCart } from "@phosphor-icons/react";
import styled from "styled-components";

export const MapPinStyled = styled(MapPin)`
  color: ${(props) => props.theme.purple};
`;

export const LocationHeaderButtonContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    background-color: ${(props) => props.theme["purple-light"]};
    cursor: pointer;
    border: none;
    height: 40px;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 5px;

    &:focus
    {
      outline: 0;
      box-shadow: none;
    }

    &:active
    {
      background-color: ${(props) => props.theme.white};
    }
`;

export const LocationHeaderButtonText = styled.p`
    font-family: 'Roboto';
    color: ${(props) => props.theme.purple};
`;

export const CartButtonContainer = styled.button`
  padding: 10px;
  height: 40px;
  background-color: ${(props) => props.theme["yellow-light"]};
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:focus
    {
      outline: 0;
      box-shadow: none;
    }

    &:active
    {
      background-color: ${(props) => props.theme.white};
    }
`;

export const ShoppingCartStyled = styled(ShoppingCart)`
  color: ${(props) => props.theme["yellow-dark"]};
`;
