import { BankStyled, CreditCardButton, CreditCardStyled, CreditCardText, DebitCardButton, DebitCardText, MoneyButton, MoneyStyled, MoneyText, PaymentBlockContainer, PaymentOptionsContainer, PaymentText, PaymentTextContainer, PaymentTitle, StyledCurrencyDollar, TitleTextContainer } from "./styles";

export function PaymentBlock()
{
    return (
        <>
        <PaymentBlockContainer>
            <PaymentTextContainer>
                <StyledCurrencyDollar size={22}/>
                <TitleTextContainer>
                    <PaymentTitle>Pagamento</PaymentTitle>
                    <PaymentText>O pagamento é feito na entrega. Escolha a forma que deseja pagar</PaymentText>
                </TitleTextContainer>
            </PaymentTextContainer>
            <PaymentOptionsContainer>
                <CreditCardButton>
                    <CreditCardStyled size={22}/>
                    <CreditCardText>CARTÃO DE CRÉDITO</CreditCardText>
                </CreditCardButton>
                <DebitCardButton>
                    <BankStyled size={22}/>
                    <DebitCardText>CARTÃO DE DÉBITO</DebitCardText>
                </DebitCardButton>
                <MoneyButton>
                    <MoneyStyled size={22}/>
                    <MoneyText>DINHEIRO</MoneyText>
                </MoneyButton>
            </PaymentOptionsContainer>
        </PaymentBlockContainer>
            
        </>
    );
    
}