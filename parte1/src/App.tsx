
import { Hero } from "./Components/Hero/Hero.tsx";
import { Services } from "./Components/Services/Services.tsx";
import { CTA } from "./Components/CTA/CTA.tsx";
import { GlobalStyles } from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Hero />
      <Services />
      <CTA />
    </ThemeProvider>
  );
}

export default App;
