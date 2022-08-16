import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
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

  ::-webkit-scrollbar {
    width: 0.4rem;
  }
  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme['base-button']}
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 2rem;
    background: ${({ theme }) => theme['base-purple']}
  }
`
