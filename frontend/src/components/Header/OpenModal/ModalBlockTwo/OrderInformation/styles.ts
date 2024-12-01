import styled from "styled-components";

export const OrderInformationContainer = styled.div`
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const TotalOfItensContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const TotalOfItensText = styled.p`

`;

export const TotalOfItensValue = styled.p`

`;

export const DeliveryContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const DeliveryText = styled.p`

`;

export const DeliveryPrice = styled.p`

`;

export const TotalValueContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const TotalValueText = styled.p`
    font-size: 18px;
    font-weight: bold;
`;

export const TotalValue = styled.p`
    font-size: 18px;
    font-weight: bold;
`;

export const ConfirmOrderButton = styled.button`
    background-color: ${(props) => props.theme.yellow};
    color: ${(props) => props.theme.white};
    padding: 10px;
    border: none;
    border-radius: 5px;
    margin-top: 10px;
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