import { createGlobalStyle, IDefaultTheme } from 'styled-components';

export const GlobalStyles = createGlobalStyle<{ theme: IDefaultTheme }>`
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  font-size: 18px;
  font-family: Poppins, ariel,sans-serif;
  color: ${({ theme }) => theme.color.neutral.veryDarkViolet};
}

button {
  font-family: Poppins, ariel,sans-serif;
}

`;
