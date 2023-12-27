import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html, body, #root {
    margin: 0;
    padding: 0;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }

  #root {
    background-color: #F5F5F5;
    box-sizing: border-box;
  }
`;
