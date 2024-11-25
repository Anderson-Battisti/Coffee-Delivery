import { useContext } from "react";
import { AddOrRemoveCoffeeContainer, CoffeeAmount, LessCoffee, MoreCoffee } from "./styles";
import { AmountContext } from "../../../../../../Context/AmountContext";

interface AddAndRemoveCoffeeProps
{
    id: number;
}

export function AddAndRemoveCoffee({id}: AddAndRemoveCoffeeProps)
{
    const amountContext = useContext(AmountContext);

    return (
        <AddOrRemoveCoffeeContainer>
            <LessCoffee as="button" onClick={() => amountContext.decreaseAmount(id)}> - </LessCoffee>
            <CoffeeAmount>{amountContext.coffeeAmount[id]}</CoffeeAmount>
            <MoreCoffee as="button" onClick={() => amountContext.increaseAmount(id)}> + </MoreCoffee>
        </AddOrRemoveCoffeeContainer>
    );
}