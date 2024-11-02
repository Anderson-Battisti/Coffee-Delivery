import { SectionOne } from "./HomeComponents/SectionOne/SectionOne";
import { SectionTwo } from "./HomeComponents/SectionTwo";
import { HomePage } from "./styles";

export function Home()
{
    return (
        <HomePage>
            <SectionOne />
            <SectionTwo />
        </HomePage>
    );
}