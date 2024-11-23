import { AddAndRemoveCoffee } from "./AddAndRemoveCoffee";
import { OpenModalContainer, ShoppingCartSimpleStyled } from "./OpenModal/styles";

import 
{ 
    AmountAndCartContainer, CoffeeCardContainer, CoffeeDescription, CoffeeImage, 
    CoffeeName, CoffeePrice, CoffeePriceContainer, Currency, Price 
}   from "./styles";

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
                    <AddAndRemoveCoffee />
                    <OpenModalContainer >
                        <ShoppingCartSimpleStyled weight="fill" size={23}/>
                    </OpenModalContainer>
                </AmountAndCartContainer>
            </CoffeePriceContainer>
        </CoffeeCardContainer>
    );
}