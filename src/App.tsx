import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './styles/GlobalStyles'
import { defaultThemes } from './styles/Themes/default'
function App() {
  return (
    <ThemeProvider theme={defaultThemes}>
      <h1>hello Worls!!</h1>
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App
