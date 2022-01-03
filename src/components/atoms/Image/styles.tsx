import styled from 'styled-components';
import { IImageProps } from './types';

export const Img = styled.img<IImageProps>`
  cursor: ${props => (props.isLink ? 'pointer' : '')};
`;
