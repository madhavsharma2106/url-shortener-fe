import styled from 'styled-components';
import { ITextInputProps } from '..';
import { isEmptyObject } from '../../../../utils';

export const TextInput = styled.div<ITextInputProps | any>`
  input {
    padding: 10px 30px;
    font-size: ${({ theme }) => theme.font.size.l};
    border: 3px solid transparent;
    border-radius: 10px;
    width: 100%;
    border-color: ${({ error, theme }) =>
      !isEmptyObject(error) && theme.color.secondary.red};
    color: ${({ error, theme }) =>
      !isEmptyObject(error) && theme.color.secondary.red};
  }

  .error {
    color: ${({ theme }) => theme.color.secondary.red};
    font-size: ${({ theme }) => theme.font.size.xs};
    margin-top: 5px;
  }
`;
