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
    {image: Expresso, name: "Expresso Tradicional", description: "O tradicional café feito com água quente e grãos moídos", price: 9.90},
    {image: Americano, name: "Tradicional Americano", description: "Expresso diluído, menos intenso que o tradicional", price: 9.90},
    {image: ExpressoCremoso, name: "Expresso Cremoso", description: "Café expresso tradicional com espuma cremosa", price: 9.90},
    {image: ExpressoGelado, name: "Expresso Gelado", description: "Bebida preparada com café expresso e cubos de gelo", price: 9.90},
    {image: CafeComLeite, name: "Café com Leite", description: "Meio a meio de expresso tradicional com leite vaporizado", price: 9.90},
    {image: Latte, name: "Latte", description: "Uma dose de café expresso com o dobro de leite e espuma cremosa", price: 9.90},
    {image: Capuccino, name: "Capuccino", description: "Bebida com canela feita de doses iguais de café, leite e espuma", price: 9.90},
    {image: Macchiato, name: "Macchiato", description: "Café expresso misturado com um pouco de leite quente e espuma", price: 9.90},
    {image: Mocaccino, name: "Mocaccino", description: "Café expresso com calda de chocolate, pouco leite e espuma", price: 9.90},
    {image: ChocolateQuente, name: "Chocolate Quente", description: "Bebida feita com chocolate dissolvido no leite quente e café", price: 9.90},
    {image: Cubano, name: "Cubano", description: "Drink gelado de café expresso com rum, creme de leite e hortelã", price: 9.90},
    {image: Havaiano, name: "Havaiano", description: "Bebida adocicada preparada com café e leite de coco", price: 9.90},
    {image: Arabe, name: "Árabe", description: "Bebida preparada com grãos de café árabe e especiarias", price: 9.90},
    {image: Irlandes, name: "Irlandês", description: "Bebida a base de café, uísque irlandês, açúcar e chantilly", price: 9.90}
];

export const CoffeeCardContainer = styled.div`

`;

export const CoffeeImage = styled.img`

`;

export const CoffeeName = styled.p`

`;

export const CoffeeDescription = styled.p`

`;

export const CoffeePrice = styled.p`

`;