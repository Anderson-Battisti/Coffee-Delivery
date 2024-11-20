import { AddAndRemoveCoffee } from "../../../AddAndRemoveCoffee";
import { AddAndRemoveContainer, CartCardCoffeeName, CartCardContainer, CartCardImage, CoffeInformation, CoffeInformationContainer, RemoveCoffeeButtonContainer, RemoveCoffeeLabel, StyledTrash } from "./styles";

interface CartCardProps
{
    name: string;
    description: string;
    currency: string;
    price: string;
    image: string;
}

export function CartCard({image}: CartCardProps)
{
    return (
        <CartCardContainer>
            <CartCardImage src={image}/>
            <CoffeInformationContainer>
                <CoffeInformation>
                    <CartCardCoffeeName>Expresso Tradicional</CartCardCoffeeName>
                    <AddAndRemoveContainer>
                        <AddAndRemoveCoffee />
                        <RemoveCoffeeButtonContainer as="button">
                            <StyledTrash />
                            <RemoveCoffeeLabel>REMOVER</RemoveCoffeeLabel>
                        </RemoveCoffeeButtonContainer>
                    </AddAndRemoveContainer>
                </CoffeInformation>  
            </CoffeInformationContainer>
        </CartCardContainer>
    );
}