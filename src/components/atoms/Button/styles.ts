import styled, { css } from 'styled-components';
import { ButtonSizes, ButtonTypes, ButtonVariants, IButtonStyleProps } from '.';

const getButtonSize = (size: ButtonSizes) => {
  switch (size) {
    case ButtonSizes.LARGE:
      return _largeButton;
    case ButtonSizes.REGULAR:
    default:
      return _regularButton;
  }
};

const getBorderRadius = (buttonType: ButtonTypes) => {
  switch (buttonType) {
    case ButtonTypes.ROUNDED:
      return '30px';
    case ButtonTypes.REGULAR:
    default:
      return '5px';
  }
};

const getButtonVariant = (variant: ButtonVariants) => {
  switch (variant) {
    case ButtonVariants.PRIMARY:
      return _primaryButton;
    case ButtonVariants.SECONDARY:
    default:
      return _secondaryButton;
  }
};

const _commonButtonStyles = css`
  cursor: pointer;
  border: none;
  color: ${({ theme }) => theme.color.neutral.white};
  background-color: ${({ theme }) => theme.color.primary.cyan};
`;

const _primaryButton = css`
  ${_commonButtonStyles}
  &:hover {
    opacity: 0.7;
  }
`;

const _secondaryButton = css`
  ${_commonButtonStyles}
  background-color: ${({ theme }) => theme.color.primary.darkViolet};

  &:hover {
    opacity: 0.8;
  }
`;

const _regularButton = css`
  font-size: ${({ theme }) => theme.font.size.m};
  padding: 5px 20px;
  font-weight: ${({ theme }) => theme.font.weight.regular};
`;

const _largeButton = css`
  font-size: ${({ theme }) => theme.font.size.l};
  padding: 10px 30px;
  font-weight: ${({ theme }) => theme.font.weight.bold};
`;

export const Button = styled.button<IButtonStyleProps>`
  border-radius: ${({ buttonType }) =>
    buttonType && getBorderRadius(buttonType)};
  ${({ variant }) => getButtonVariant(variant)}
  ${({ size }) => size && getButtonSize(size)};

  opacity: ${({ $loading }) => $loading && 0.7};
  cursor: ${({ $loading }) => $loading && 'not-allowed'};
`;
