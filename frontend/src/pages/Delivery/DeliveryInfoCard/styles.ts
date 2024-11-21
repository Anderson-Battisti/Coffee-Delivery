import styled from "styled-components";

export const DeliveryInfoCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 30px;
    border-radius: 50px 10px 50px 10px;
    border: 1px solid ${(props) => props.theme.yellow};
    justify-content: center;
    height: 250px;
`;

export const AddressContainer = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
`;

export const TextContainer = styled.div`
    
`;

export const AddressTitle = styled.p`
    font-size: 16px;
    & span
    {
        font-weight: bold;
    }
`;

export const AdressSubtitle = styled.p`

`;

export const DeliveryTimeContainer = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
`;

export const DeliveryTimeTitle = styled.p``;

export const DeliveryTime = styled.p`
    font-weight: bold;
`;

export const PaymentMethodContainer = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
`;

export const DeliveryPaymentTitle = styled.p``;

export const DeliveryPaymentSubtitle = styled.p`
    font-weight: bold;
`;





