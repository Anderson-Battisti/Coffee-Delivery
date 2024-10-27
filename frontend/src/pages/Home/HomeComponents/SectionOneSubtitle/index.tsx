import { Subtitle } from "./styles";

interface SectionOneSubtitleText
{
    text: string;
}
export function SectionOneSubtitle({text}: SectionOneSubtitleText)
{
    return (
        <Subtitle>{text}</Subtitle>
    );
}