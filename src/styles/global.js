import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100%;
  }

  body {
    background: #5C5C76;
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button, select {
    color: #222,
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
  }

  h1 {
    color: #fff;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
