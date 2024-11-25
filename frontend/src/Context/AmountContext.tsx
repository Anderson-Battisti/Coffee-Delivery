import { createContext, FunctionComponent, ReactElement, useState } from "react";

interface AmountProvider
{
    children: ReactElement;
}

interface AmountContextInterface
{
    coffeeAmount: number[];
    saveAmount: (amountToAdd: number) => void;
    increaseAmount: (id: number) => void;
    decreaseAmount: (id: number) => void;
    resetAmount: (id: number) => void;
}

export const AmountContext = createContext({} as AmountContextInterface);

export const AmountProvider: FunctionComponent<AmountProvider> = ({children}) =>
{
    const [amount, setAmount] = useState<number[]>(Array(14).fill(0)); //creates an array with 14 positions started with value 0

    const saveAmount = (id: number, amountToAdd: number) =>
    {
        setAmount((prevAmount) =>
        {
            return prevAmount.map((amount, index) =>
            {
                return index === id ? amountToAdd : amount;
            });
        }); 
    }

    const increaseAmount = (id: number) => 
    {
        setAmount((prevAmount) =>
        {
            return prevAmount.map((currentAmount, index) =>
            {
                return index === id ? (amount[index] + 1) : currentAmount;
            });
        });
    };

    const decreaseAmount = (id: number) => 
    {
        setAmount((prevAmount) =>
        {
            return prevAmount.map((currentAmount, index) =>
            {
                if (index === id && currentAmount > 0)
                {
                    return (currentAmount - 1);
                }
                else
                {
                    return currentAmount;
                }
            });
        });
    } 

    function resetAmount(id: number)
    {
        setAmount((prevAmount) =>
        {
            return prevAmount.map((currentAmount, index) =>
            {
                return id === index ? currentAmount = 0 : currentAmount;
            });
        });
    }
    
    return (
        <AmountContext.Provider value={{coffeeAmount: amount, saveAmount: saveAmount, increaseAmount: increaseAmount, decreaseAmount: decreaseAmount, resetAmount: resetAmount} as AmountContextInterface}> 
            {children}
        </AmountContext.Provider> //here, value returns variables and functions to be used in the global application
    );
}