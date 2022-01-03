import { css } from 'styled-components';

export enum Breakpoints {
  MOBILE = '800px',
  DESKTOP = '1440px',
}

export enum DeviceWidth {
  MOBILE = '375px',
  DESKTOP = '1200px',
}

export const container = css`
  max-width: ${DeviceWidth.DESKTOP};
  padding: 0 25px;
  margin: auto;
`;
