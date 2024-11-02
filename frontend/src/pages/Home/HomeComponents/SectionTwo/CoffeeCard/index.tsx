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
                        <LessCoffee as="button"> - </LessCoffee>
                        <CoffeeAmount> 0 </CoffeeAmount>
                        <MoreCoffee as="button"> + </MoreCoffee>
                    </AddOrRemoveCoffeeContainer>
                    <AddToCartButton/>
                </AmountAndCartContainer>
            </CoffeePriceContainer>
        </CoffeeCardContainer>
    );
}