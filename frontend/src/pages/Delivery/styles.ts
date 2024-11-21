import styled from "styled-components";

export const DeliveryScreenContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 50px;
`;

export const DeliveryTextBlock = styled.div`
    padding-left: 65px;
`;

export const DeliveryTitle = styled.p` 
    font-size: 32px;
    font-family: 'Baloo 2';
    font-weight: bold;
    color: ${(props) => props.theme["yellow-dark"]};
`;

export const DeliverySubtitle = styled.p` 

`;

export const DeliveryInfoAndImageContainer = styled.div`
    display: flex;
    padding-top: 50px;
    justify-content: space-between;
    align-items: center;
    padding-left: 70px;
`;

export const DeliveryImage = styled.img`

`;