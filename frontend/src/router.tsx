import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Delivery } from "./pages/Delivery";
import { DefaultLayout } from "./layout/DefaultLayout";

export function Router() 
{
  return (
    <Routes>
        <Route path="/" element={<DefaultLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/delivery" element={<Delivery />} />
        </Route>
    </Routes>
  );
}