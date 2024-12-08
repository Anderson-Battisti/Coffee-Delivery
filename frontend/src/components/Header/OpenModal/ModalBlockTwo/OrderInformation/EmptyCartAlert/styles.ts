import styled from "styled-components";

export const EmptyCartAlertContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: start;
    padding-top: 1%;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(5px);
    z-index: 999;
    position: fixed;
`;

export const AlertCardContainer = styled.div`
    display: flex;
    width: 20%;
    height: 20%;
    background-color: black;
`;