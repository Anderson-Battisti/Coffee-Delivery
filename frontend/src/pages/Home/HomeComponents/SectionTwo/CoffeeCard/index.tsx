import { useState } from "react";
import { AddToCartButton } from "./AddToCartButton";
import { AddOrRemoveCoffeeContainer, AmountAndCartContainer, CoffeeAmount, CoffeeCardContainer, CoffeeDescription, CoffeeImage, CoffeeName, CoffeePrice, CoffeePriceContainer, Currency, LessCoffee, MoreCoffee, Price } from "./styles";

interface CoffeeCardProps 
{
    name: string;
    description: string;
    currency: string;
    price: string;
    image: string;
}

export function CoffeeCard({name, description, currency, price, image}: CoffeeCardProps)
{
    const [amount, setAmount] = useState(0);
    const increaseAmount = () => setAmount(prevAmount => prevAmount + 1);
    const decreaseAmount = () => setAmount(prevAmount => prevAmount - 1);

    return (
        <CoffeeCardContainer>
            <CoffeeImage src={image}/>
            <CoffeeName>{name}</CoffeeName>
            <CoffeeDescription>{description}</CoffeeDescription>
            <CoffeePriceContainer>
                <CoffeePrice>
                    <Currency>{currency}</Currency>
                    <Price>{price}</Price>
                </CoffeePrice>
                <AmountAndCartContainer>
                    <AddOrRemoveCoffeeContainer>
                        <LessCoffee as="button" onClick={decreaseAmount}> - </LessCoffee>
                        <CoffeeAmount>{amount}</CoffeeAmount>
                        <MoreCoffee as="button" onClick={increaseAmount}> + </MoreCoffee>
                    </AddOrRemoveCoffeeContainer>
                    <AddToCartButton/>
                </AmountAndCartContainer>
            </CoffeePriceContainer>
        </CoffeeCardContainer>
    );
}