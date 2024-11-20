import { CartCard } from "./CartCart";
import { OrderInformation } from "./OrderInformation";
import { BlockTwo, BlockTwoBox, BlockTwoTitle, StyledHr } from "./styles";

interface ModalBlockTwoProps
{
    name: string;
    description: string;
    currency: string;
    price: string;
    image: string;
}

export function ModalBlockTwo({name, description, currency, price, image}: ModalBlockTwoProps)
{
    return (
        <BlockTwo>
            <BlockTwoTitle>Cafés selecionados</BlockTwoTitle>
            <BlockTwoBox>
                <CartCard currency={currency} description={description} name={name} price={price} image={image}/>
                <StyledHr />
                <OrderInformation />
            </BlockTwoBox>
        </BlockTwo>
    );
}