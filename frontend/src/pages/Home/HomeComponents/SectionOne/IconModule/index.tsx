import { useTheme } from "styled-components";
import { defaultTheme } from "../../../../../styles/theme/DefaultTheme";
import { IconText } from "./IconText/IconText";
import { Circle, IconModuleContainer } from "./styles";

interface IconModuleProps
{
    bgColor: keyof typeof defaultTheme;
    iconColor: keyof typeof defaultTheme;
    icon: React.ElementType;
    text: string;
}

export function IconModule({bgColor, iconColor, text, icon: Icon}: IconModuleProps)
{
    const theme = useTheme();
    return (
        <IconModuleContainer>
            <Circle bgColor={theme[bgColor]}>
                <Icon color={theme[iconColor]} size={25} />
            </Circle>
            <IconText text={text}/>
        </IconModuleContainer>
    );
}