import { AddressContainer, AddressText, AddressTitle, MapPinStyled, TextBox } from "./styles";

export function AddressBlock()
{
    return (
        <AddressContainer>
            <MapPinStyled size={22}/>
            <TextBox>
                <AddressTitle>Endereço de Entrega</AddressTitle>
                <AddressText>Informe o endereço onde deseja receber seu pedido</AddressText>
            </TextBox>
        </AddressContainer>
    );
}