import { AddressBlock } from "./AddressBlock";
import { InputBlock } from "./InputBlock";
import { PaymentBlock } from "./PaymentBlock";
import { BlockOne, BlockOneBox, BlockOneTitle } from "./styles";

export function ModalBlockOne()
{
    return (
        <BlockOne>
            <BlockOneTitle>Complete seu pedido</BlockOneTitle>
            <BlockOneBox>
                <AddressBlock />
                <InputBlock />
            </BlockOneBox>
            <PaymentBlock />
        </BlockOne>
    );
}