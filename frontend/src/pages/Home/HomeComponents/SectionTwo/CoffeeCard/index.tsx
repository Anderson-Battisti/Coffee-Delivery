import { useContext } from "react";
import { AddAndRemoveCoffee } from "./AddAndRemoveCoffee";
import { CoffeeContext, CoffeeInterface } from "../../../../../Context/CoffeeContext";
import 
{ 
    AmountAndCartContainer, CoffeeCardContainer, CoffeeDescription, CoffeeImage, 
    CoffeeName, CoffeePrice, CoffeePriceContainer, Currency, Price 
}   from "./styles";
import { AddToCartButton, ShoppingCartSimpleStyled } from "../../../../../components/Header/OpenModal/styles";
import { AmountContext } from "../../../../../Context/AmountContext";


interface CoffeeCardProps 
{
    name: string;
    description: string;
    currency: string;
    price: string;
    image: string;
    id: number;
}

export function CoffeeCard({name, description, currency, price, image, id}: CoffeeCardProps)
{
    const coffeeContext = useContext(CoffeeContext);
    const amountContext = useContext(AmountContext);

    const handleSaveCoffee = () =>
    {
        const newCoffee: CoffeeInterface = 
        {
            name: name, 
            description: description, 
            currency: currency, 
            price: price, 
            image: image,
            id: id,
            amount: amountContext.coffeeAmount[id]
        };

        coffeeContext.saveCoffees(newCoffee);
        coffeeContext.saveCartCoffees(newCoffee);
        amountContext.resetAmount(id);
    };
    
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
                    <AddAndRemoveCoffee id={id} />
                    <AddToCartButton onClick={handleSaveCoffee}>
                        <ShoppingCartSimpleStyled weight="fill" size={23}/>
                    </AddToCartButton>
                </AmountAndCartContainer>
            </CoffeePriceContainer>
        </CoffeeCardContainer>
    );
}