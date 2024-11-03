import { Bank, CreditCard, CurrencyDollar, Money } from "@phosphor-icons/react";
import styled from "styled-components";

export const PaymentBlockContainer = styled.div`
    background-color: ${(props) => props.theme["base-input"]};
    margin-top: 25px;
    padding: 25px;
    border-radius: 10px;
`;

export const PaymentTextContainer = styled.div`
    display: flex;
`;

export const StyledCurrencyDollar = styled(CurrencyDollar)`

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

export const CreditCardButtonContainer = styled.div`
    display: flex;
`;

export const CreditCardStyled = styled(CreditCard)`

`;

export const CreditCardText = styled.p`

`;

export const DebitCardButtonContainer = styled.div`
    display: flex;
`;

export const BankStyled = styled(Bank)`

`;

export const DebitCardText = styled.p`

`;

export const MoneyButtonContainer = styled.div`
    display: flex;
`;

export const MoneyStyled = styled(Money)`

`;

export const MoneyText = styled.p`

`;
