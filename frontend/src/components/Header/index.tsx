import Logo from "../../assets/Logo.png";
import { CartButton, LocationHeaderButton } from "../headerbuttons";
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
                    <CartButton/>                      
                </HeaderButtonDiv>
            </HeaderContainer>
        </HeaderDiv>   
        </>
    );
}   