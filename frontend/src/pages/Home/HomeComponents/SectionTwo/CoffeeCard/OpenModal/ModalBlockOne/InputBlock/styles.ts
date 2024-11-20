import styled from "styled-components";

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 40px;
    padding-top: 0px;
`;

export const StyledInput = styled.input`
    padding: 7px 9px;
    font-size: 16px;
    border-radius: 5px;
    border: 1px solid;
    border-color: ${(props) => props.theme["base-hover"]};
    background-color: ${(props) => props.theme["base-button"]};

    &:focus
    {
        box-shadow: none;
    }
`;

export const CepInput = styled(StyledInput)`
    width: 206px;
`;

export const StreetNameInput = styled(StyledInput)`

`;

export const NumberComplementContainer = styled.div`
    display: flex;
    gap: 10px;
`;

export const PropertyNumber = styled(StyledInput)`

`;

export const Complement = styled(StyledInput)`
    width: 100%;
`;

export const NeighborhoodCityStateContainer = styled.div`
    display: flex;
    gap: 10px;
`;

export const Neighborhood = styled(StyledInput)`

`;

export const City = styled(StyledInput)`

`;

export const UF = styled(StyledInput)`
    width: 100px;
`;
