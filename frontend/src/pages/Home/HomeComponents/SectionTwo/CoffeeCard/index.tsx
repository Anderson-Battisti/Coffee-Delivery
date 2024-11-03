import { useState } from "react";
import { OpenModal} from "./OpenModal";
import { ModalBlockOne } from "./OpenModal/ModalBlockOne";
import { ModalBlockTwo } from "./OpenModal/ModalBlockTwo";

import 
{ 
    AddOrRemoveCoffeeContainer, AmountAndCartContainer, BlocksContainer, CoffeeAmount, CoffeeCardContainer, 
    CoffeeDescription, CoffeeImage, CoffeeName, CoffeePrice, CoffeePriceContainer, Currency, LessCoffee, 
    ModalContentContainer, ModalTitle, MoreCoffee, Price 
} from "./styles";

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
    const decreaseAmount = () => setAmount(prevAmount => prevAmount > 0 ? prevAmount - 1 : prevAmount);

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
                    <OpenModal>
                        <ModalContentContainer>
                            <ModalTitle>Quase lá!</ModalTitle>
                            <BlocksContainer>
                                <ModalBlockOne />
                                <ModalBlockTwo />
                            </BlocksContainer>
                        </ModalContentContainer>
                    </OpenModal>
                </AmountAndCartContainer>
            </CoffeePriceContainer>
        </CoffeeCardContainer>
    );
}