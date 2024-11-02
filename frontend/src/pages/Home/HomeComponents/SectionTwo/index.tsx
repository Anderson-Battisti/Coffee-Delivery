import { CoffeeCard } from "./CoffeeCard";
import { CoffeeCards } from "./CoffeeCard/styles";
import { CoffeeCardsContainer, SectionTwoContainer, SectionTwoTitle } from "./styles";

export function SectionTwo()
{
    return (
        <SectionTwoContainer>
            <SectionTwoTitle>Nossos cafés</SectionTwoTitle>
            <CoffeeCardsContainer>
                {CoffeeCards.map(coffee => (
                    <CoffeeCard
                        image={coffee.image}
                        name={coffee.name}
                        description={coffee.description}
                        currency={coffee.currency}
                        price={coffee.price}
                    />
                ))}
            </CoffeeCardsContainer>
        </SectionTwoContainer>
    );
}
