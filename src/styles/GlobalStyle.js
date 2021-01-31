import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    width: 100%;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }
  body {
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    background-color: ${({ theme }) => theme.colorBg};
    color: ${({ theme }) => theme.colorText};
    font-family: ${({ theme }) => theme.fontLato};
    font-size: ${({ theme }) => theme.sizeBase};
    line-height: 1.3;
  }

  #root {
    min-height: 100vh;
    display: grid;
    grid-template-rows: 1fr auto;
    grid-template-columns: 100%;
  }

  img,
  svg {
    width: 100%;
    max-width: 100%;
    vertical-align: middle;
  }

  svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
    vertical-align: middle;
  }

  a {
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    cursor: pointer;
  }
`;

export default GlobalStyle;
