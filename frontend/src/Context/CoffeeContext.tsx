import { createContext, FunctionComponent, ReactElement, useState } from "react";

export interface CoffeeInterface
{
    image: string;
    name: string;
    description: string;
    currency: string;
    price: string;
    id: number;   
    amount: number;
}

interface CoffeeProvider
{
    children: ReactElement;
}

interface CoffeeContextInterface
{
    coffees: CoffeeInterface[];
    coffeeAmount: number;
    cartCoffees: CoffeeInterface[];
    saveCoffees: (newCoffee: CoffeeInterface) => void;
    increaseCartCoffeeAmount: (id: number) => void;
    decreaseCartCoffeeAmount: (id: number) => void;
    getCoffeeAmountById: (id: number) => number;
    saveAmount: (amountToAdd: number) => void;
    saveCartCoffees: (newCoffee: CoffeeInterface) => void;
}

export const CoffeeContext = createContext({} as CoffeeContextInterface);

export const CoffeeProvider: FunctionComponent<CoffeeProvider> = ({children}) =>
{
    const [coffees, setCoffees] = useState<CoffeeInterface[]>([]);
    const [cartCoffees, setCartCoffees] = useState<CoffeeInterface[]>([]);

    function saveCoffees(newCoffee: CoffeeInterface)
    {
        setCoffees((prevCoffees) =>
        {
            const updatedCoffees = [...prevCoffees, newCoffee];
            localStorage.setItem('coffees', JSON.stringify(updatedCoffees));
            return updatedCoffees;
        }); 
    }
    function increaseCartCoffeeAmount(id: number)
    {
        setCartCoffees((prevCoffees) =>
        {
            return prevCoffees.map((currentCoffee) =>
            {
                if (currentCoffee.id === id)
                {
                    return {...currentCoffee, amount: (currentCoffee.amount + 1)};
                }
                else
                {
                    return currentCoffee;
                }
            });
        });
    }

    function decreaseCartCoffeeAmount(id: number)
    {
        setCartCoffees((prevCoffees) =>
        {
            return prevCoffees.map((currentCoffee) =>
            {
                if (currentCoffee.id === id && currentCoffee.amount > 0)
                {
                    return {...currentCoffee, amount: (currentCoffee.amount - 1)};
                }
                else
                {
                    return currentCoffee;
                }
            });
        });
    }

    function getCoffeeAmountById(id: number)
    {
        const coffee = cartCoffees.find((currentCoffee) => currentCoffee.id === id);
        return coffee ? coffee.amount : 0;
    }

    function saveCartCoffees(newCoffee: CoffeeInterface)
    {
        setCartCoffees((prevCoffees) =>
        {
            if (cartCoffees.length <= 0)
            {
                return [newCoffee];
            }
            else
            {
                let thereIsNewCoffee = true;
                const coffees = prevCoffees.map((currentCoffee) =>
                {
                    if (currentCoffee.id === newCoffee.id)
                    {
                        thereIsNewCoffee = false;
                        return {...currentCoffee, amount: (currentCoffee.amount + newCoffee.amount)};
                    }
                    else
                    {
                        return currentCoffee; 
                    }
                });

                return thereIsNewCoffee ? [...coffees, newCoffee] : coffees;
            }
        });
    }

    return (
        <CoffeeContext.Provider value={{coffees: coffees, cartCoffees: cartCoffees, saveCoffees: saveCoffees, increaseCartCoffeeAmount: increaseCartCoffeeAmount, decreaseCartCoffeeAmount: decreaseCartCoffeeAmount, getCoffeeAmountById: getCoffeeAmountById, saveCartCoffees: saveCartCoffees} as CoffeeContextInterface}> 
            {children}
        </CoffeeContext.Provider> //here, value returns variables and functions to be used in the global application
    );
}