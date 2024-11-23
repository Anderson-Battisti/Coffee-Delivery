import { useState } from "react";
import { ModalContainer, XStyled } from "./styles";
import { CartButtonContainer, ShoppingCartStyled } from "../../../../../../components/headerbuttons/styles";

interface OpenModalProps
{
    children: React.ReactNode;
}

export function OpenModal({children}: OpenModalProps)
{
    const [isOpen, setIsOpen] = useState(false);

    return(
        <>
            <CartButtonContainer as="button" onClick={() => setIsOpen(!isOpen)}>
                <ShoppingCartStyled/>
            </CartButtonContainer>

            {isOpen && (
                <ModalContainer>
                    <XStyled onClick={() => setIsOpen(!isOpen)} size={22}/>
                    {children}
                </ModalContainer>
            )}
        </>
    );
}