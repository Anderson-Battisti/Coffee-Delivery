import { SectionOneText } from "../SectionOneText";
import { LineOne, LineTwo, SectionOneContainer, SectionOneIconsContainer, SectionOneImage, SectionOneTextContainer } from "./styles";
import Image from "../../../../assets/homeImage.png";
import { SectionOneSubtitle } from "../SectionOneSubtitle";
import { IconModule } from "../IconModule";
import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";

export function SectionOne()
{
    return (
        <SectionOneContainer>
            <SectionOneTextContainer>
                <SectionOneText text={"Encontre o café perfeito para qualquer hora do dia"}/>
                <SectionOneSubtitle text={"Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora"}/>
                <SectionOneIconsContainer>
                    <LineOne>
                        <IconModule bgColor={"yellow-dark"} icon={Package} iconColor={"white"} text={"Compra simples e segura"} />
                        <IconModule bgColor={"base-text"} icon={ShoppingCart} iconColor={"white"} text={"Embalagem mantém o café intacto"}/>
                    </LineOne>
                    <LineTwo>
                        <IconModule bgColor={"yellow"} icon={Timer} iconColor={"white"} text={"Entrega rápida e rastreada"} />
                        <IconModule bgColor={"purple"} icon={Coffee} iconColor={"white"} text={"O café chega fresquinho até você"}/>
                    </LineTwo>
                </SectionOneIconsContainer>
            </SectionOneTextContainer>
            <SectionOneImage src={Image}/>
        </SectionOneContainer>  
    );
}