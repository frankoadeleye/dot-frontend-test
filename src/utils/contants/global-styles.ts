import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  *::before,
  *::after,
  * {
    box-sizing: border-box;
    font-family: 'Work Sans', sans-serif;
  }

  html,
  body {
    margin: 0;
    padding: 0;
    background-color: #ffffff;
  }

  a{
    text-decoration: none;
    cursor: pointer;
  }


`;

export default GlobalStyles;
