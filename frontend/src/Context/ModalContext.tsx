import { createContext, FunctionComponent, ReactElement, useState } from "react";

interface ModalProvider
{
    children: ReactElement;
}

interface ModalContextInterface
{
    isOpen: boolean;
    openAndCloseModal: () => void;
}

export const ModalContext = createContext({} as ModalContextInterface);

export const ModalProvider: FunctionComponent<ModalProvider> = ({children}) =>
{
    const [isOpen, setIsOpen] = useState(false);

    function openAndCloseModal()
    {
        setIsOpen(!isOpen);
    }

    return (
        <ModalContext.Provider value={{isOpen: isOpen, openAndCloseModal: openAndCloseModal} as ModalContextInterface}> 
            {children}
        </ModalContext.Provider>
    );
}