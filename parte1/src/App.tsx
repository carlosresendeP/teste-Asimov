
import { Hero } from './Components/Hero'
import { GlobalStyles } from './styles/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/Theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Hero />
    </ThemeProvider>
  )
}

export default App
