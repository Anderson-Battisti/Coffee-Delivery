import { CartButtonContainer, LocationHeaderButtonContainer, LocationHeaderButtonText, MapPinStyled, ShoppingCartStyled } from "./styles";

interface LocationHeaderButtonText
{
    text: string;
}

export function LocationHeaderButton({text} : LocationHeaderButtonText)
{
    return (
        <LocationHeaderButtonContainer as="button">
            <MapPinStyled />
            <LocationHeaderButtonText>{text}</LocationHeaderButtonText>
        </LocationHeaderButtonContainer>  
    );
}

export function CartButton()
{
    return (
        <CartButtonContainer as="button">
            <ShoppingCartStyled/>
        </CartButtonContainer>
    );
}