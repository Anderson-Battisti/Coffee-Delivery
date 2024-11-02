import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderDiv = styled.div`
    background-color: ${(props) => props.theme.background};
    height: 80px;
    display: flex;
    width: 100%;
`;

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-left: 75px;
    margin-right: 75px;
    align-items: center;
    width: 100%;
`;

export const StyledLink = styled(Link)`

    &:focus
    {
        outline: none;
        box-shadow: none;
    }

    &:active
    {
        outline: none;
        box-shadow: none;
    }
`;

export const HeaderLogo = styled.img`
    height: 50%;

    &:focus
    {
      outline: 0 !important;
      box-shadow: none !important;
    }

    &:active
    {
      outline: 0 !important;
      box-shadow: none !important;
    }
`;

export const HeaderButtonDiv = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
`;


