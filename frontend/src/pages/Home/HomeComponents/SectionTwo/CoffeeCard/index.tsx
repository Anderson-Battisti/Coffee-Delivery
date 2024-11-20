import { AddAndRemoveCoffee } from "./AddAndRemoveCoffee";
import { OpenModal} from "./OpenModal";
import { ModalBlockOne } from "./OpenModal/ModalBlockOne";
import { ModalBlockTwo } from "./OpenModal/ModalBlockTwo";

import 
{ 
    AmountAndCartContainer, BlocksContainer, CoffeeCardContainer, CoffeeDescription, CoffeeImage, 
    CoffeeName, CoffeePrice, CoffeePriceContainer, Currency, ModalContentContainer, ModalTitle, Price 
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
                    <OpenModal >
                        <ModalContentContainer>
                            <ModalTitle>Quase lá!</ModalTitle>
                            <BlocksContainer>
                                <ModalBlockOne />
                                <ModalBlockTwo name={name} description={description} currency={currency} price={price} image={image} />
                            </BlocksContainer>
                        </ModalContentContainer>
                    </OpenModal>
                </AmountAndCartContainer>
            </CoffeePriceContainer>
        </CoffeeCardContainer>
    );
}