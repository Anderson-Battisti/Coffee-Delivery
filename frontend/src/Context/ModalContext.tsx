import { createContext, FunctionComponent, ReactElement, useState } from "react";

interface ModalProvider
{
    children: ReactElement;
}

interface ModalContextInterface
{
    isOpen: boolean;
    openAndCloseModal: () => void;
    emptyCartCoffeeAlertStatus: boolean;
    openAndCloseEmptyCartAlert: () => void;
}

export const ModalContext = createContext({} as ModalContextInterface);

export const ModalProvider: FunctionComponent<ModalProvider> = ({children}) =>
{
    const [isOpen, setIsOpen] = useState(false);
    const [emptyCartCoffeeAlertStatus, setEmptyCartCoffeeAlertStatus] = useState(false);

    function openAndCloseModal()
    {
        setIsOpen(!isOpen);
    }

    function openAndCloseEmptyCartAlert()
    {
        setEmptyCartCoffeeAlertStatus(!emptyCartCoffeeAlertStatus);
    }

    return (
        <ModalContext.Provider value={{
            isOpen: isOpen, 
            openAndCloseModal: openAndCloseModal,
            emptyCartCoffeeAlertStatus: emptyCartCoffeeAlertStatus,
            openAndCloseEmptyCartAlert: openAndCloseEmptyCartAlert} as ModalContextInterface}> 
            {children}
        </ModalContext.Provider>
    );
}