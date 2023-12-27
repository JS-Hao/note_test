import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html, body, #root {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }

  #root {
    background-color: #F5F5F5;
    box-sizing: border-box;
  }
`;
