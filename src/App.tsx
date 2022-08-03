import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './styles/GlobalStyles'
import { defaultThemes } from './styles/Themes/default'

import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

export function App() {
  return (
    <ThemeProvider theme={defaultThemes}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyles />
    </ThemeProvider>
  )
}
