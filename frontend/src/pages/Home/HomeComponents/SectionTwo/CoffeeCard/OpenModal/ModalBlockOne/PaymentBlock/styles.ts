import { Bank, CreditCard, CurrencyDollar, Money } from "@phosphor-icons/react";
import styled from "styled-components";

export const PaymentBlockContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    background-color: ${(props) => props.theme["base-input"]};
    margin-top: 25px;
    padding: 25px;
    border-radius: 10px;
`;

export const PaymentTextContainer = styled.div`
    display: flex;
    gap: 10px;
`;

export const StyledCurrencyDollar = styled(CurrencyDollar)`
    color: ${(props) => props.theme["purple-dark"]};
`;

export const TitleTextContainer = styled.div`

`;

export const PaymentTitle = styled.p`

`;

export const PaymentText = styled.p`

`;

export const PaymentOptionsContainer = styled.div`
    display: flex;
    padding-top: 20px;
    gap: 10px;
`;

export const CreditCardButton = styled.button`
    display: flex;
    padding: 10px;
    align-items: center;
    gap: 10px;
    border-radius: 5px;
    background-color: ${(props) => props.theme["purple-light"]};
    box-shadow: none;
    outline: none;
    border: none;
    width: 210px;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;

    &:focus
    {
        outline: none;
        box-shadow: none;
    }

    &:hover
    {
        transform: scale(1.05);
    }
`;

export const CreditCardStyled = styled(CreditCard)`
    color: ${(props) => props.theme["purple-dark"]};
`;

export const CreditCardText = styled.p`
    color: ${(props) => props.theme["base-subtitle"]};
`;

export const DebitCardButton = styled.div`
    display: flex;
    padding: 10px;
    align-items: center;
    gap: 10px;
    border-radius: 5px;
    background-color: ${(props) => props.theme["purple-light"]};
    width: 210px;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;

    &:focus
    {
        outline: none;
        box-shadow: none;
    }

    &:hover
    {
        transform: scale(1.05);
    }
`;

export const BankStyled = styled(Bank)`
    color: ${(props) => props.theme["purple-dark"]};
`;

export const DebitCardText = styled.p`

`;

export const MoneyButton = styled.div`
    display: flex;
    padding: 10px;
    align-items: center;
    gap: 10px;
    border-radius: 5px;
    background-color: ${(props) => props.theme["purple-light"]};
    width: 210px;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;

    &:focus
    {
        outline: none;
        box-shadow: none;
    }

    &:hover
    {
        transform: scale(1.05);
    }
`;

export const MoneyStyled = styled(Money)`
    color: ${(props) => props.theme["purple-dark"]};
`;

export const MoneyText = styled.p`

`;
