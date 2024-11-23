import { createContext, FunctionComponent, ReactElement, useState } from "react";

interface CoffeeInterface
{
    image: string;
    name: string;
    description: string;
    currency: string;
    price: string;    
}

interface CoffeeProviderInterface
{
    children: ReactElement;
}

interface CoffeeContextInterface
{
    coffees: CoffeeInterface[];
    saveCoffees: (newCoffee: CoffeeInterface) => void;
}

export const CoffeeContext = createContext({} as CoffeeContextInterface);

export const CoffeeProvider: FunctionComponent<CoffeeProviderInterface> = ({children}) =>
{
    const [coffees, setCoffees] = useState<CoffeeInterface[]>([]);

    function saveCoffees(newCoffee: CoffeeInterface)
    {
        setCoffees((prevCoffees) =>
        {
            const updatedCoffees = [...prevCoffees, newCoffee];
            localStorage.setItem('coffees', JSON.stringify(updatedCoffees));
            return updatedCoffees;
        });  
    }

    return (
        <CoffeeContext.Provider value={{coffees: coffees, saveCoffees: saveCoffees} as CoffeeContextInterface}>
            {children}
        </CoffeeContext.Provider>
    );
}