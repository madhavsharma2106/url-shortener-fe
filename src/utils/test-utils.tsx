import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { DefaultTheme } from '../styles/DefaultTheme';

export const renderComponent = (comp: any) =>
  render(
    <ThemeProvider theme={DefaultTheme}>
      <BrowserRouter> {comp}</BrowserRouter>
    </ThemeProvider>,
  );
