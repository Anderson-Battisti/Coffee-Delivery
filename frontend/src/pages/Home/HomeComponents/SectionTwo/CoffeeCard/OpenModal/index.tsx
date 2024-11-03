import { useState } from "react";
import { ModalContainer, OpenModalContainer, ShoppingCartSimpleStyled, XStyled } from "./styles";

interface OpenModalProps
{
    children: React.ReactNode;
}

export function OpenModal({children}: OpenModalProps)
{
    const [isOpen, setIsOpen] = useState(false);

    return(
        <>
            <OpenModalContainer as="button" onClick={() => setIsOpen(!isOpen)}>
                <ShoppingCartSimpleStyled weight="fill" size={23}/>
            </OpenModalContainer>

            {isOpen && (
                <ModalContainer>
                    <XStyled onClick={() => setIsOpen(!isOpen)} size={22}/>
                    {children}
                </ModalContainer>
            )}
        </>
    );
}