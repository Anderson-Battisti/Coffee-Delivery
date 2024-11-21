import { DeliveryInfoCardContainer, AddressContainer, AddressTitle, AdressSubtitle, DeliveryTimeContainer, DeliveryTimeTitle, DeliveryTime, PaymentMethodContainer, DeliveryPaymentTitle, DeliveryPaymentSubtitle, TextContainer } from "./styles";
import { DeliveryIcon } from "./DeliveryIcon";
import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react";

export function DeliveryInfoCard()
{
    return (
        <DeliveryInfoCardContainer>
            <AddressContainer>
                <DeliveryIcon bgColor={"purple"} iconColor={"white"} icon={MapPin} />
                <TextContainer>
                    <AddressTitle>Entrega em <span>Rua João Daniel Martinelli, 102</span></AddressTitle>
                    <AdressSubtitle>Farrapos - Porto Alegre, RS</AdressSubtitle>
                </TextContainer>
            </AddressContainer>
            <DeliveryTimeContainer>
                <DeliveryIcon bgColor={"yellow"} iconColor={"white"} icon={Timer} />
                <TextContainer>
                    <DeliveryTimeTitle>Previsão de entrega</DeliveryTimeTitle>
                    <DeliveryTime>20 min - 30 min</DeliveryTime>
                </TextContainer>
            </DeliveryTimeContainer>
            <PaymentMethodContainer>
                <DeliveryIcon bgColor={"yellow-dark"} iconColor={"white"} icon={CurrencyDollar}/>
                <TextContainer>
                    <DeliveryPaymentTitle>Pagamento na entrega</DeliveryPaymentTitle>
                    <DeliveryPaymentSubtitle>Cartão de crédito</DeliveryPaymentSubtitle>
                </TextContainer>
            </PaymentMethodContainer>
        </DeliveryInfoCardContainer>
    );
}