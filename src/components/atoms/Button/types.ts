export enum ButtonVariants {
  PRIMARY = 'PRIMARY',
  SECONDARY = 'SECONDARY',
}

export enum ButtonSizes {
  REGULAR = 'REGULAR',
  LARGE = 'LARGE',
}

export enum ButtonTypes {
  ROUNDED = 'ROUNDED',
  REGULAR = 'REGULAR',
}

export interface IButtonProps extends React.HTMLAttributes<any> {
  variant: ButtonVariants;
  size?: ButtonSizes;
  buttonType?: ButtonTypes;
  loading?: boolean;
  type?: 'submit' | 'reset';
}

export interface IButtonStyleProps extends Omit<IButtonProps, 'loading'> {
  $loading?: boolean; // using transient props here to props being passed to the DOM element. https://styled-components.com/docs/api#transient-props
}
