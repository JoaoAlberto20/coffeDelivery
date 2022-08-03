import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme['yellow-dark']}; 
  }


  body {
    background: ${(props) => props.theme['base-background']};
    color: ${(props) => props.theme['base-text']};
    --webkit-font-smoothing: antialiased;
  }
  
  body, input, button {
    font-size: 1rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }
`
