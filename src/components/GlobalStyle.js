import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  h1,h2,h3,h4,h5,h6,p {
    margin: 0;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  li{
    list-style: none;
    padding: 0;
  }
  h1{
    font-size: larger;
    
  }
  button{
     width: 150px;
  font-size: 18px;
  border-radius: 4px;
  padding: 5px;
  background-color: #9e9e9e80;
  border:none;
  &:hover {
    background-color: violet;
    color: white;
    transform: scale(1.1);
  }
  }
`;
