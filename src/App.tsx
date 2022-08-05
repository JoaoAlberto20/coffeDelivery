import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './styles/GlobalStyles'
import { defaultThemes } from './styles/Themes/default'

import { BrowserRouter } from 'react-router-dom'
import { CoffeeProvider } from './Contexts/COffeeContext'
import { Router } from './Router'

export function App() {
  return (
    <ThemeProvider theme={defaultThemes}>
      <BrowserRouter>
        <CoffeeProvider>
          <Router />
        </CoffeeProvider>
      </BrowserRouter>
      <GlobalStyles />
    </ThemeProvider>
  )
}
