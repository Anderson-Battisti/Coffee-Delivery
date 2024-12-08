import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ModalContext } from "../../../../../Context/ModalContext";
import { CoffeeContext } from "../../../../../Context/CoffeeContext";

import 
{ DeliveryContainer, DeliveryText, OrderInformationContainer, TotalOfItensContainer, 
  TotalOfItensText, TotalOfItensValue, TotalValue, TotalValueContainer, TotalValueText, ConfirmOrderButton, 
  DeliveryPrice
} from "./styles";
export function OrderInformation()
{
    const navigate = useNavigate();             //This const provides access to the function useNavigate
    const modalContext = useContext(ModalContext);
    const coffeeContext = useContext(CoffeeContext);

    const handleNavigation = () =>                    
    {
        if (itemsTotalPrice() > 0)
        {
            modalContext.openAndCloseModal();
            navigate('/delivery')
            coffeeContext.clearCart();
        }
        else
        {
            modalContext.openAndCloseEmptyCartAlert();
        }
    }

    const itemsTotalPrice = () =>
    {
        let totalOfItems = 0;
        for (let i = 0; i < coffeeContext.cartCoffees.length; i++)
        {
            const price = coffeeContext.cartCoffees[i].price;
            const amount = coffeeContext.cartCoffees[i].amount;

            totalOfItems += (price * amount);
        }
        return totalOfItems;
    }

    const totalOfItems = itemsTotalPrice();
    const deliveryPrice = totalOfItems > 0 ? coffeeContext.deliveryPrice : 0;
    const totalPrice = (totalOfItems + deliveryPrice);

    return (
        <OrderInformationContainer>
            <TotalOfItensContainer>
                <TotalOfItensText>Total de itens</TotalOfItensText>
                <TotalOfItensValue>R$ {totalOfItems.toFixed(2).replace('.', ',')}</TotalOfItensValue>
            </TotalOfItensContainer>
            <DeliveryContainer>
                <DeliveryText>Entrega</DeliveryText>
                <DeliveryPrice>R$ {deliveryPrice.toFixed(2).replace('.', ',')}</DeliveryPrice>
            </DeliveryContainer>
            <TotalValueContainer>
                <TotalValueText>Total</TotalValueText>
                <TotalValue>R$ {totalPrice.toFixed(2).replace('.', ',')}</TotalValue>
            </TotalValueContainer>
            <ConfirmOrderButton onClick={handleNavigation}>CONFIRMAR PEDIDO</ConfirmOrderButton>
        </OrderInformationContainer>
    );
}