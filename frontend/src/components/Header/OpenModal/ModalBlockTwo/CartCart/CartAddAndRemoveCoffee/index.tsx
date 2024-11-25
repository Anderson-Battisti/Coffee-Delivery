import { useContext } from "react";
import { AddOrRemoveCoffeeContainer, CoffeeAmount, LessCoffee, MoreCoffee } from "./styles";
import { CoffeeContext } from "../../../../../../Context/CoffeeContext";

interface AddAndRemoveCoffeeProps
{
    id: number;
}

export function AddAndRemoveCoffee({id}: AddAndRemoveCoffeeProps)
{
    const coffeeContext = useContext(CoffeeContext);
    const coffeeAmount: number = coffeeContext.getCoffeeAmountById(id);
    
    return (
        <AddOrRemoveCoffeeContainer>
            <LessCoffee as="button" onClick={() => coffeeContext.decreaseCartCoffeeAmount(id)}> - </LessCoffee>
            <CoffeeAmount>{coffeeAmount}</CoffeeAmount>
            <MoreCoffee as="button" onClick={() => coffeeContext.increaseCartCoffeeAmount(id)}> + </MoreCoffee>
        </AddOrRemoveCoffeeContainer>
    );
}