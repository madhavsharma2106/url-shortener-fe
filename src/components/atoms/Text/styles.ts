import styled from 'styled-components';
import { ITextProps } from '.';
import { Breakpoints } from '../../../styles/helpers';

export const Text = styled.div<ITextProps>`
  color: ${props => props.color};
  font-size: ${props => props.size};
  line-height: ${props => props.lineHeight};
  font-style: ${props => props.italic && 'italic'};

  @media (max-width: ${Breakpoints.MOBILE}) {
    font-size: ${props => props?.device?.mobile};
  }
`;
