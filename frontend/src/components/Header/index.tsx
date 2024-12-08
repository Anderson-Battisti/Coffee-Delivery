import { ModalContentContainer, ModalTitle, BlocksContainer } from "../../pages/Home/HomeComponents/SectionTwo/CoffeeCard/styles";
import { LocationHeaderButton } from "../headerbuttons";
import { OpenModal } from "./OpenModal";
import { ModalBlockOne } from "./OpenModal/ModalBlockOne";
import { ModalBlockTwo } from "./OpenModal/ModalBlockTwo";
import { HeaderDiv, HeaderContainer, StyledLink, HeaderLogo, HeaderButtonDiv } from "./styles";
import Logo from "../../assets/Logo.png";
import { EmptyCartAlert } from "./OpenModal/ModalBlockTwo/OrderInformation/EmptyCartAlert";

export function Header()
{
    return (
        <>
        <HeaderDiv>
            <HeaderContainer>
                <StyledLink to="/">
                    <HeaderLogo src={Logo}/>
                </StyledLink>
                <HeaderButtonDiv>
                    <LocationHeaderButton text={"Porto Alegre, RS"} />
                    <OpenModal >
                        <ModalContentContainer>
                            <ModalTitle>Quase lá!</ModalTitle>
                            <BlocksContainer>
                                <ModalBlockOne />
                                <ModalBlockTwo />
                            </BlocksContainer>
                        </ModalContentContainer>
                        <EmptyCartAlert />
                    </OpenModal>                      
                </HeaderButtonDiv>
            </HeaderContainer>
        </HeaderDiv>   
        </>
    );
}   