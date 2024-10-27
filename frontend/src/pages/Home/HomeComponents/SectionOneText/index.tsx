import { Title } from "./styles";

interface TitleText
{
    text: string;
}

export function SectionOneText({text}: TitleText)
{
    return (
        <Title>{text}</Title>
    );
}