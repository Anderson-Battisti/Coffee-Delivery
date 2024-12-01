import { CepInput, City, Complement, InputContainer, Neighborhood, NeighborhoodCityStateContainer, NumberComplementContainer, PropertyNumber, StreetNameInput, UF } from "./styles";

export function InputBlock()
{
    return (
        <InputContainer>
            <CepInput placeholder="CEP" id="cep"/>
            <StreetNameInput placeholder="Rua" id="streetName"/>
            <NumberComplementContainer>
                <PropertyNumber placeholder="Número" id="propertyNumber"/>
                <Complement placeholder="Complemento (opcional)" id="complement"/>
            </NumberComplementContainer>
            <NeighborhoodCityStateContainer>
                <Neighborhood placeholder="Bairro" id="neighborhood"/>
                <City placeholder="Cidade" id="city"/>
                <UF placeholder="UF" id="state"/>
            </NeighborhoodCityStateContainer>
        </InputContainer>
    );
}