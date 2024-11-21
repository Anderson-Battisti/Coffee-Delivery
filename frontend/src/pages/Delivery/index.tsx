import { DeliveryImage, DeliveryInfoAndImageContainer, DeliveryScreenContainer, DeliverySubtitle, DeliveryTextBlock, DeliveryTitle } from "./styles";
import deliveryImage from "../../assets/Illustration.png";
import { DeliveryInfoCard } from "./DeliveryInfoCard";

export function Delivery()
{
    return (
        <DeliveryScreenContainer>
            <DeliveryTextBlock>
                <DeliveryTitle>Uhu! Pedido Confirmado</DeliveryTitle>
                <DeliverySubtitle>Agora é só aguardar que o café chegará até você</DeliverySubtitle>
            </DeliveryTextBlock>
            <DeliveryInfoAndImageContainer>
                <DeliveryInfoCard />
                <DeliveryImage src={deliveryImage}/>
            </DeliveryInfoAndImageContainer>
        </DeliveryScreenContainer>
    );
}