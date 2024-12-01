import { useContext } from "react";
import { CartCards } from "./CartCart";
import { OrderInformation } from "./OrderInformation";
import { BlockTwo, BlockTwoBox, BlockTwoTitle, CoffeeBlock } from "./styles";
import { CoffeeContext } from "../../../../Context/CoffeeContext";

export function ModalBlockTwo()
{
    const coffeeContext = useContext(CoffeeContext);

    return (
        <BlockTwo>
            <BlockTwoTitle>Cafés selecionados</BlockTwoTitle>
            <BlockTwoBox>
                <CoffeeBlock>
                    {coffeeContext.cartCoffees.map(coffee => (
                        <CartCards coffee={coffee} />
                    ))}
                </CoffeeBlock>
                <OrderInformation />
            </BlockTwoBox>
        </BlockTwo>
    );
}