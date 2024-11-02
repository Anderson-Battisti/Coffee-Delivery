import { CoffeeCardContainer, CoffeeDescription, CoffeeImage, CoffeeName, CoffeePrice } from "./styles";

interface CoffeeCardProps 
{
    name: string;
    description: string;
    price: number;
    image: string;
}

export function CoffeeCard({name, description, price, image}: CoffeeCardProps)
{
    return (
        <CoffeeCardContainer>
            <CoffeeImage src={image}/>
            <CoffeeName>{name}</CoffeeName>
            <CoffeeDescription>{description}</CoffeeDescription>
            <CoffeePrice>{price}</CoffeePrice>
        </CoffeeCardContainer>
    );
}