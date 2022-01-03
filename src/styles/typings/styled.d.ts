import 'styled-components';

interface IColorWeights {
  100?: string;
  200?: string;
  300?: string;
  400?: string;
  500?: string;
  600?: string;
}

interface IColorHues {
  one?: IColorWeights;
  two?: IColorWeights;
  three?: IColorWeights;
  four?: IColorWeights;
  five?: IColorWeights;
  six?: IColorWeights;
  seven?: IColorWeights;
}

declare module 'styled-components' {
  export interface IDefaultTheme {
    font: {
      size: {
        xs: string;
        r: string;
        m: string;
        l: string;
        xl: string;
      };
      lineHeight: {
        xs: string;
        r: string;
        m: string;
        l: string;
        xl: string;
      };
      weight: {
        medium: string;
        bold: string;
      };
    };
    color: {
      primary: {
        cyan: string;
        darkViolet: string;
      };
      secondary: {
        red: string;
      };
      neutral: {
        grey: string;
        greyishViolet: string;
        veryDarkBlue: string;
        veryDarkViolet: string;
        white: string;
        offWhite: string;
      };
    };
  }
}
