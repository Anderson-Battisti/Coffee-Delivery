import Logo from "../../assets/Logo.png";
import { OpenModal } from "../../pages/Home/HomeComponents/SectionTwo/CoffeeCard/OpenModal";
import { ModalBlockOne } from "../../pages/Home/HomeComponents/SectionTwo/CoffeeCard/OpenModal/ModalBlockOne";
import { ModalBlockTwo } from "../../pages/Home/HomeComponents/SectionTwo/CoffeeCard/OpenModal/ModalBlockTwo";
import { BlocksContainer, ModalContentContainer, ModalTitle } from "../../pages/Home/HomeComponents/SectionTwo/CoffeeCard/styles";
import { LocationHeaderButton } from "../headerbuttons";
import { HeaderButtonDiv, HeaderContainer, HeaderDiv, HeaderLogo, StyledLink } from "./styles";

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
                                <ModalBlockTwo name={"name"} description={"description"} currency={"currency"} price={"price"} image={"image"} />
                            </BlocksContainer>
                        </ModalContentContainer>
                    </OpenModal>                      
                </HeaderButtonDiv>
            </HeaderContainer>
        </HeaderDiv>   
        </>
    );
}   