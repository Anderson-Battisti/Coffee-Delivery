import { useTheme } from "styled-components";
import { defaultTheme } from "../../../../styles/theme/DefaultTheme";
import { Circle } from "../../../Home/HomeComponents/SectionOne/IconModule/styles";

interface DeliveryIconProps
{
    bgColor: keyof typeof defaultTheme;
    iconColor: keyof typeof defaultTheme;
    icon: React.ElementType;
}

export function DeliveryIcon({bgColor, iconColor, icon: Icon}: DeliveryIconProps)
{
    const theme = useTheme();
    return (
        <Circle bgColor={theme[bgColor]} width="35px" height="35px">
            <Icon weight="regular" color={iconColor}/>
        </Circle>
    );
}