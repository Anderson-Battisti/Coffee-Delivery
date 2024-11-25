import { BrowserRouter } from "react-router-dom";
import { Router } from "./router";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme/DefaultTheme";
import { GlobalStyle } from "./styles/global";
import { CoffeeProvider } from "./Context/CoffeeContext";
import { AmountProvider } from "./Context/AmountContext";

function App() 
{
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <AmountProvider>
            <CoffeeProvider>
              <Router />
            </CoffeeProvider>
          </AmountProvider>
        </BrowserRouter>
        <GlobalStyle/>
      </ThemeProvider>
    </>
  );
}

export default App
