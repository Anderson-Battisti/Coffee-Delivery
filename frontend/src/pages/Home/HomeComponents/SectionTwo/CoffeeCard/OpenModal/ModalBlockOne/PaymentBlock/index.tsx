import { BankStyled, CreditCardButtonContainer, CreditCardStyled, CreditCardText, DebitCardButtonContainer, DebitCardText, MoneyButtonContainer, MoneyStyled, MoneyText, PaymentBlockContainer, PaymentOptionsContainer, PaymentText, PaymentTextContainer, PaymentTitle, StyledCurrencyDollar, TitleTextContainer } from "./styles";

export function PaymentBlock()
{
    return (
        <>
        <PaymentBlockContainer>
            <PaymentTextContainer>
                <StyledCurrencyDollar />
                <TitleTextContainer>
                    <PaymentTitle>Pagamento</PaymentTitle>
                    <PaymentText>O pagamento é feito na entrega. Escolha a forma que deseja pagar</PaymentText>
                </TitleTextContainer>
            </PaymentTextContainer>
            <PaymentOptionsContainer>
                <CreditCardButtonContainer as="button">
                    <CreditCardStyled />
                    <CreditCardText>CARTÃO DE CRÉDITO</CreditCardText>
                </CreditCardButtonContainer>
                <DebitCardButtonContainer as="button">
                    <BankStyled />
                    <DebitCardText>CARTÃO DE DÉBITO</DebitCardText>
                </DebitCardButtonContainer>
                <MoneyButtonContainer as="button">
                    <MoneyStyled />
                    <MoneyText>DINHEIRO</MoneyText>
                </MoneyButtonContainer>
            </PaymentOptionsContainer>
        </PaymentBlockContainer>
            
        </>
    );
    
}