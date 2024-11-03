import { CepInput, City, Complement, InputContainer, Neighborhood, NeighborhoodCityStateContainer, NumberComplementContainer, PropertyNumber, StreetNameInput, UF } from "./styles";

export function InputBlock()
{
    return (
        <InputContainer>
            <CepInput placeholder="CEP"/>
            <StreetNameInput placeholder="Rua"/>
            <NumberComplementContainer>
                <PropertyNumber placeholder="Número"/>
                <Complement placeholder="Complemento (opcional)"/>
            </NumberComplementContainer>
            <NeighborhoodCityStateContainer>
                <Neighborhood placeholder="Bairro"/>
                <City placeholder="Cidade"/>
                <UF placeholder="UF"/>
            </NeighborhoodCityStateContainer>
        </InputContainer>
    );
}