import { BrowserRouter } from "react-router-dom";
import { Router } from "./router";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme/DefaultTheme";
import { GlobalStyle } from "./styles/global";

function App() 
{
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
        <GlobalStyle/>
      </ThemeProvider>
    </>
  );
}

export default App
