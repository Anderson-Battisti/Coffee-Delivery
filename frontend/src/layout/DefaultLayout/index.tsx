import { Outlet } from "react-router-dom";
import { LayoutContainer } from "./styles";
import { Header } from "../../components/Header";


export function DefaultLayout()
{
    return (
        <>
            <div>
                <Header />
                <LayoutContainer>
                    <Outlet />
                </LayoutContainer>
            </div>
        </>
    )
}