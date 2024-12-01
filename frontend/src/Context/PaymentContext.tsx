import { createContext, FunctionComponent, ReactElement, useState } from "react";

interface PaymentProvider
{
    children: ReactElement;
}

interface PaymentContextInterface
{
    paymentMethod: string;
}

export const PaymentContext = createContext({} as PaymentContextInterface);

export const ModalProvider: FunctionComponent<PaymentProvider> = ({children}) =>
{
    const [paymentMethod, setPaymentMethod] = useState<string>('');

    function definePaymentMethod(identifier: string)
    {
         
    }

    return (
        <PaymentContext.Provider value={{paymentMethod: paymentMethod} as PaymentContextInterface}> 
            {children}
        </PaymentContext.Provider>
    );
}