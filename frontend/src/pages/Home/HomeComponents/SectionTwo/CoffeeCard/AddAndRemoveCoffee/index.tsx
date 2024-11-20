import { useState } from "react";
import { AddOrRemoveCoffeeContainer, CoffeeAmount, LessCoffee, MoreCoffee } from "./styles";

export function AddAndRemoveCoffee()
{
    const [amount, setAmount] = useState(0);
    const increaseAmount = () => setAmount(amount => amount + 1);
    const decreaseAmount = () => setAmount(amount => amount > 0 ? amount - 1 : amount);
    
    return (
        <AddOrRemoveCoffeeContainer>
            <LessCoffee as="button" onClick={decreaseAmount}> - </LessCoffee>
            <CoffeeAmount>{amount}</CoffeeAmount>
            <MoreCoffee as="button" onClick={increaseAmount}> + </MoreCoffee>
        </AddOrRemoveCoffeeContainer>
    );
}