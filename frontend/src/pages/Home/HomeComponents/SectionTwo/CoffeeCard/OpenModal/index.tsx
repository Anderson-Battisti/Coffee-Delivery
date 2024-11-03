import { useState } from "react";
import { AddToCartButtonContainer, ModalContainer, ShoppingCartSimpleStyled, XStyled } from "./styles";

interface OpenModalProps
{
    children: React.ReactNode;
}

export function OpenModal({children}: OpenModalProps)
{
    const [isOpen, setIsOpen] = useState(false);

    return(
        <>
            <AddToCartButtonContainer as="button" onClick={() => setIsOpen(!isOpen)}>
                <ShoppingCartSimpleStyled weight="fill" size={23}/>
            </AddToCartButtonContainer>

            {isOpen && (
                <ModalContainer>
                    <XStyled onClick={() => setIsOpen(!isOpen)} size={22}/>
                    {children}
                </ModalContainer>
            )}
        </>
    );
}