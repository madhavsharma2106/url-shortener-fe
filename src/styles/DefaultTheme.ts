import { IDefaultTheme } from 'styled-components';

export const DefaultTheme: IDefaultTheme = {
  font: {
    size: {
      xs: '0.80rem',
      r: '1rem',
      m: '1.1rem',
      l: '1.25rem',
      xl: '1.75rem',
    },
    lineHeight: {
      xs: '1rem',
      r: '1.125rem',
      m: '1.25rem',
      l: '1.375rem',
      xl: '1.5rem',
    },
    weight: {
      medium: '500',
      bold: '700',
    },
  },
  color: {
    primary: {
      cyan: 'hsl(180, 66%, 49%)',
      darkViolet: 'hsl(257, 27%, 26%)',
    },
    secondary: {
      red: 'hsl(0, 87%, 67%)',
    },
    neutral: {
      grey: 'hsl(0, 0%, 75%)',
      greyishViolet: 'hsl(257, 7%, 63%)',
      veryDarkBlue: 'hsl(255, 11%, 22%)',
      veryDarkViolet: 'hsl(260, 8%, 14%)',
      white: '#fff',
      offWhite: 'hsl(230deg 25% 95%)',
    },
  },
};
