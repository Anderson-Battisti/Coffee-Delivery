import styled from "styled-components";
import Expresso from "../../../../../assets/Expresso.png";
import Americano from "../../../../../assets/Americano.png";
import ExpressoCremoso from "../../../../../assets/ExpressoCremoso.png";
import ExpressoGelado from "../../../../../assets/CafeGelado.png";
import CafeComLeite from "../../../../../assets/CafeComLeite.png";
import Latte from "../../../../../assets/Latte.png";
import Capuccino from "../../../../../assets/Capuccino.png";
import Macchiato from "../../../../../assets/Macchiato.png";
import Mocaccino from "../../../../../assets/Mocaccino.png";
import ChocolateQuente from "../../../../../assets/ChocolateQuente.png";
import Cubano from "../../../../../assets/Cubano.png";
import Havaiano from "../../../../../assets/Havaiano.png";
import Arabe from "../../../../../assets/Arabe.png";
import Irlandes from "../../../../../assets/Irlandes.png";

export const CoffeeCards = [
    {image: Expresso, name: "Expresso Tradicional", description: "O tradicional café feito com água quente e grãos moídos", currency: "R$", price: 9.9, id: 0},
    {image: Americano, name: "Tradicional Americano", description: "Expresso diluído, menos intenso que o tradicional", currency: "R$", price: 9.9, id: 1},
    {image: ExpressoCremoso, name: "Expresso Cremoso", description: "Café expresso tradicional com espuma cremosa", currency: "R$", price: 9.9, id: 2},
    {image: ExpressoGelado, name: "Expresso Gelado", description: "Bebida preparada com café expresso e cubos de gelo", currency: "R$", price: 9.9, id: 3},
    {image: CafeComLeite, name: "Café com Leite", description: "Meio a meio de expresso tradicional com leite vaporizado", currency: "R$", price: 9.9, id: 4},
    {image: Latte, name: "Latte", description: "Uma dose de café expresso com o dobro de leite e espuma cremosa", currency: "R$", price: 9.9, id: 5},
    {image: Capuccino, name: "Capuccino", description: "Bebida com canela feita de doses iguais de café, leite e espuma", currency: "R$", price: 9.9, id: 6},
    {image: Macchiato, name: "Macchiato", description: "Café expresso misturado com um pouco de leite quente e espuma", currency: "R$", price: 9.9, id: 7},
    {image: Mocaccino, name: "Mocaccino", description: "Café expresso com calda de chocolate, pouco leite e espuma", currency: "R$", price: 9.9, id: 8},
    {image: ChocolateQuente, name: "Chocolate Quente", description: "Bebida feita com chocolate dissolvido no leite", currency: "R$", price: 9.9, id: 9},
    {image: Cubano, name: "Cubano", description: "Drink gelado de café expresso com rum, creme de leite e hortelã", currency: "R$", price: 9.9, id: 10},
    {image: Havaiano, name: "Havaiano", description: "Bebida adocicada preparada com café e leite de coco", currency: "R$", price: 9.9, id: 11},
    {image: Arabe, name: "Árabe", description: "Bebida preparada com grãos de café árabe e especiarias", currency: "R$", price: 9.9, id: 12},
    {image: Irlandes, name: "Irlandês", description: "Bebida a base de café, uísque irlandês, açúcar e chantilly", currency: "R$", price: 9.9, id: 13}
];

export const CoffeeCardContainer = styled.div`
    background-color: ${(props) => props.theme["base-card"]};
    width: 256px;
    height: 310px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-top-right-radius: 50px;
    border-bottom-left-radius: 50px;
`;

export const CoffeeImage = styled.img`
    margin-top: -20px;
`;

export const CoffeeName = styled.p`
    font-family: 'Baloo 2';
    font-weight: bold;
    font-size: 22px;
    padding-top: 60px;
`;

export const CoffeeDescription = styled.p`
    padding-top: 10px;
    display: flex;
    text-align: center;
    color: ${(props) => props.theme["base-text"]};
    font-family: 'Roboto';
`;

export const CoffeePriceContainer = styled.div`
    display: flex;
    padding-top: 20px;
    gap: 20px;
    align-items: center;
`;

export const CoffeePrice = styled.p`
    display: flex;
    gap: 5px;
    align-items: baseline;
`;

export const Currency = styled.p`

`;

export const Price = styled.p`
    font-size: 25px;
    font-family: 'Baloo 2';
    font-weight: bolder;
`;

export const AmountAndCartContainer = styled.div`
    display: flex;
    gap: 5px;
`;

export const ModalContentContainer = styled.div`
    background-color: ${(props) => props.theme["base-card"]};
    border-radius: 10px;
    width: 90%;
    height: 95%;
`;

export const ModalTitle = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Baloo 2';
    font-weight: bolder;
    font-size: 25px;
    color: ${(props) => props.theme["base-title"]};
`;

export const BlocksContainer = styled.div`
    display: flex;
    gap: 25px;
    justify-content: center;
`;

