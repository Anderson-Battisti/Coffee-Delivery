import { useContext } from "react";
import { ModalContainer, XStyled } from "./styles";
import { CartButtonContainer, ShoppingCartStyled } from "../../headerbuttons/styles";
import { ModalContext } from "../../../Context/ModalContext";

interface OpenModalProps
{
    children: React.ReactNode;
}

export function OpenModal({children}: OpenModalProps)
{
    const modalContext = useContext(ModalContext);

    function handleOpenAndCloseModal()
    {
        modalContext.openAndCloseModal();
    }

    return(
        <>
            <CartButtonContainer as="button" onClick={handleOpenAndCloseModal}>
                <ShoppingCartStyled/>
            </CartButtonContainer>

            {modalContext.isOpen && (
                <ModalContainer>
                    <XStyled onClick={handleOpenAndCloseModal} size={22}/>
                    {children}
                </ModalContainer>
            )}
        </>
    );
}