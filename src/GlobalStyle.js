import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
  font-family: 'Montserrat',
    sans-serif;
  background-color: ${({ theme }) => theme.color.gallery};
}

*,
::after,
::before {
  box-sizing: inherit
}
`;
