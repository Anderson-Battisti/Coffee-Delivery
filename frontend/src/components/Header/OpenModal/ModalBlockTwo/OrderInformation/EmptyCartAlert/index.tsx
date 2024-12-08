import { AlertCardContainer, EmptyCartAlertContainer } from "./styles";
import { XStyled } from "../../../styles";
import { useContext } from "react";
import { ModalContext } from "../../../../../../Context/ModalContext";

export function EmptyCartAlert()
{
    const modalContext = useContext(ModalContext);

    return(
        (modalContext.emptyCartCoffeeAlertStatus === true) && (
            <EmptyCartAlertContainer>
                <XStyled onClick={() => modalContext.openAndCloseEmptyCartAlert()} size={22}/>
                <AlertCardContainer>
                    <p>This is an Alert</p>
                </AlertCardContainer>
            </EmptyCartAlertContainer>
        )
    );
}