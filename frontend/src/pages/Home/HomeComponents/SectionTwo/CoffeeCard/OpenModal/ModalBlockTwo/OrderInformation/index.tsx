import { useNavigate } from "react-router-dom";
import 
{ DeliveryContainer, DeliveryText, DeliveryValue, OrderInformationContainer, TotalOfItensContainer, 
  TotalOfItensText, TotalOfItensValue, TotalValue, TotalValueContainer, TotalValueText, ConfirmOrderButton 
} from "./styles";

export function OrderInformation()
{
    const navigate = useNavigate();             //This const provides access to the function useNavigate

    const handleNavigation = () =>                    
    {
        navigate('/delivery')
    }

    return (
        <OrderInformationContainer>
            <TotalOfItensContainer>
                <TotalOfItensText>Total de itens</TotalOfItensText>
                <TotalOfItensValue>R$ 29,70</TotalOfItensValue>
            </TotalOfItensContainer>
            <DeliveryContainer>
                <DeliveryText>Entrega</DeliveryText>
                <DeliveryValue>R$ 3,50</DeliveryValue>
            </DeliveryContainer>
            <TotalValueContainer>
                <TotalValueText>Total</TotalValueText>
                <TotalValue>R$ 33,20</TotalValue>
            </TotalValueContainer>
            <ConfirmOrderButton onClick={handleNavigation}>CONFIRMAR PEDIDO</ConfirmOrderButton>
        </OrderInformationContainer>
    );
}