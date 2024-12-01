
import { AddAndRemoveContainer, CartCardCoffeeName, CartCardContainer, CartCardImage, CoffeInformation, CoffeInformationContainer, RemoveCoffeeButtonContainer, RemoveCoffeeLabel, StyledTrash } from "./styles";
import { StyledHr } from "../styles";
import { CoffeeInterface } from "../../../../../Context/CoffeeContext";
import { AddAndRemoveCoffee } from "./CartAddAndRemoveCoffee";

interface CartCardsProps
{
    coffee: CoffeeInterface;
}

export function CartCards({coffee}: CartCardsProps)
{
    return (
        <>
            <CartCardContainer>
                <CartCardImage src={coffee.image}/>
                <CoffeInformationContainer>
                    <CoffeInformation>
                        <CartCardCoffeeName>{coffee.name}</CartCardCoffeeName>
                        <AddAndRemoveContainer>
                            <AddAndRemoveCoffee id={coffee.id} />  
                            <RemoveCoffeeButtonContainer as="button">
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