import { Package } from "@phosphor-icons/react";
import styled from "styled-components";

interface CircleProps 
{
    bgColor: string;
    width: string;
    height: string;
}

export const Circle = styled.div<CircleProps>`
    width: ${({width}) => width};
    height: ${({height}) => height};
    border-radius: 50%;
    background-color: ${({ bgColor }) => bgColor};
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const PackageStyled = styled(Package)`
    color: white;
    width: 20px;
    height: 20px;
`;

export const IconModuleContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;
