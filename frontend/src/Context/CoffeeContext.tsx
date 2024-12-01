import { createContext, FunctionComponent, ReactElement, useState } from "react";

export interface CoffeeInterface
{
    image: string;
    name: string;
    description: string;
    currency: string;
    price: number;
    id: number;   
    amount: number;
}

interface CoffeeProvider
{
    children: ReactElement;
}

interface CoffeeContextInterface
{
    deliveryPrice: number
    coffees: CoffeeInterface[];
    coffeeAmount: number;
    cartCoffees: CoffeeInterface[];
    saveCoffees: (newCoffee: CoffeeInterface) => void;
    increaseCartCoffeeAmount: (id: number) => void;
    decreaseCartCoffeeAmount: (id: number) => void;
    getCoffeeAmountById: (id: number) => number;
    saveAmount: (amountToAdd: number) => void;
    saveCartCoffees: (newCoffee: CoffeeInterface) => void;
    removeCoffeeFromTheCart: (id: number) => void;
    clearCart: () => void;
}

export const CoffeeContext = createContext({} as CoffeeContextInterface);

export const CoffeeProvider: FunctionComponent<CoffeeProvider> = ({children}) =>
{
    const [coffees, setCoffees] = useState<CoffeeInterface[]>([]);
    const [cartCoffees, setCartCoffees] = useState<CoffeeInterface[]>([]);
    const deliveryPrice = 3.5;

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
            //if the cart is empty adds the first coffee.
            if (cartCoffees.length <= 0)  
            {
                return [newCoffee];
            }
            else
            {
                let isANewCoffee = true; //assumes the coffee is a new one
                
                const coffees = prevCoffees.map((currentCoffee) => 
                {
                    if (currentCoffee.id === newCoffee.id)
                    {
                        isANewCoffee = false;
                        return {...currentCoffee, amount: (currentCoffee.amount + newCoffee.amount)}; //updates the amount of the existing coffee
                    }
                    else
                    {
                        return currentCoffee; //doesn't change the previous coffee
                    }
                });
                //if the coffee is new, returns the previous coffees + the new one, else, just returns the previous list with the updated amounts
                return isANewCoffee ? [...coffees, newCoffee] : coffees;  
            }
        });
    }

    function removeCoffeeFromTheCart(id: number)
    {   
        setCartCoffees((prevCoffees) =>
        {
            return prevCoffees.filter((currentCoffee) => currentCoffee.id !== id);
        });
    }

    function clearCart()
    {
        setCartCoffees([]);
    }

    return (
        <CoffeeContext.Provider value={
            {   
                deliveryPrice: deliveryPrice,
                coffees: coffees, 
                cartCoffees: cartCoffees, 
                saveCoffees: saveCoffees, 
                increaseCartCoffeeAmount: increaseCartCoffeeAmount, 
                decreaseCartCoffeeAmount: decreaseCartCoffeeAmount, 
                getCoffeeAmountById: getCoffeeAmountById, 
                saveCartCoffees: saveCartCoffees,
                removeCoffeeFromTheCart: removeCoffeeFromTheCart,
                clearCart: clearCart 

            } as CoffeeContextInterface}>     
            {children}
        </CoffeeContext.Provider> //here, value returns variables and functions to be used in the global application
    );
}