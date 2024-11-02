import { IconTextScope } from "./styles";

interface IconTextProps
{
    text: string;
}

export function IconText({text}: IconTextProps)
{
    return (
        <IconTextScope>{text}</IconTextScope>
    );
}