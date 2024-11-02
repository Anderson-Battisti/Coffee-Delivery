import { AddToCartButtonContainer, ShoppingCartSimpleStyled } from "./styles";

export function AddToCartButton()
{
    return(
        <AddToCartButtonContainer as="button">
            <ShoppingCartSimpleStyled weight="fill" size={23}/>
        </AddToCartButtonContainer>
    );
}