import { useContext } from "react";
import { CartCards } from "./CartCart";
import { OrderInformation } from "./OrderInformation";
import { BlockTwo, BlockTwoBox, BlockTwoTitle } from "./styles";
import { CoffeeContext } from "../../../../Context/CoffeeContext";

export function ModalBlockTwo()
{
    const coffeeContext = useContext(CoffeeContext);

    return (
        <BlockTwo>
            <BlockTwoTitle>Cafés selecionados</BlockTwoTitle>
            <BlockTwoBox>
                {coffeeContext.cartCoffees.map(coffee => (
                    <CartCards coffee={coffee} />
                ))}
                <OrderInformation />
            </BlockTwoBox>
        </BlockTwo>
    );
}