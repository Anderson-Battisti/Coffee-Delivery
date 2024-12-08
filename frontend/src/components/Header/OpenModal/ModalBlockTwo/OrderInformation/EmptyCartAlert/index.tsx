import { AlertCardContainer, EmptyCartAlertButton, EmptyCartAlertContainer, EmptyCartAlertText, EmptyCartAlertTextContainer, EmptyCartAlertTitle, StyledWarning } from "./styles";
import { useContext } from "react";
import { ModalContext } from "../../../../../../Context/ModalContext";

export function EmptyCartAlert()
{
    const modalContext = useContext(ModalContext);

    return(
        (modalContext.emptyCartCoffeeAlertStatus === true) && (
            <EmptyCartAlertContainer>
                <AlertCardContainer>
                    <StyledWarning size={32} weight="fill"/>
                    <EmptyCartAlertTextContainer>
                        <EmptyCartAlertTitle>Atenção!</EmptyCartAlertTitle>
                        <EmptyCartAlertText>Você não pode confirmar o pedido sem adicionar itens ao carrinho.</EmptyCartAlertText>
                    </EmptyCartAlertTextContainer>
                    <EmptyCartAlertButton onClick={() => {modalContext.openAndCloseEmptyCartAlert(); modalContext.openAndCloseModal();}}>OK</EmptyCartAlertButton>
                </AlertCardContainer>
            </EmptyCartAlertContainer>
        )
    );
}