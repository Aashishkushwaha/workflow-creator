import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  *, *::after, *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-size: 62.5%;
    font-family: monospace, sans-serif;
    background: ${({theme}) => theme.bgColor};
  }

  ::selection {
    background: #4c4c4c;
    color: #fff;
  }
`

export default GlobalStyles;