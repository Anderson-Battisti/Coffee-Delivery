
import { AddAndRemoveContainer, CartCardCoffeeName, CartCardContainer, CartCardImage, CoffeInformation, CoffeInformationContainer, RemoveCoffeeButtonContainer, RemoveCoffeeLabel, StyledTrash } from "./styles";
import { StyledHr } from "../styles";
import { CoffeeContext, CoffeeInterface } from "../../../../../Context/CoffeeContext";
import { AddAndRemoveCoffee } from "./CartAddAndRemoveCoffee";
import { useContext } from "react";

interface CartCardsProps
{
    coffee: CoffeeInterface;
}

export function CartCards({coffee}: CartCardsProps)
{
    const coffeeContext = useContext(CoffeeContext);
    
    function handleRemoveCoffee(id: number)
    {
        coffeeContext.removeCoffeeFromTheCart(id);
    }

    return (
        <>
            <CartCardContainer>
                <CartCardImage src={coffee.image}/>
                <CoffeInformationContainer>
                    <CoffeInformation>
                        <CartCardCoffeeName>{coffee.name}</CartCardCoffeeName>
                        <AddAndRemoveContainer>
                            <AddAndRemoveCoffee id={coffee.id} />  
                            <RemoveCoffeeButtonContainer as="button" onClick={() => handleRemoveCoffee(coffee.id)}>
                                <StyledTrash />
                                <RemoveCoffeeLabel>REMOVER</RemoveCoffeeLabel>
                            </RemoveCoffeeButtonContainer>
                        </AddAndRemoveContainer>
                    </CoffeInformation>  
                </CoffeInformationContainer>
            </CartCardContainer>
            <StyledHr />
        </>
    );
}