import { UseFormRegister } from 'react-hook-form';

export interface IInputProps extends React.HTMLAttributes<any> {
  variant: InputVariants;
  register: UseFormRegister<any>;
  name: string;
  required?: boolean | string;
  error?: any;
  validate?: (inputValue: any) => boolean | string;
}

export interface ITextInputProps extends Omit<IInputProps, 'variant'> {}

export interface ITextInputStyleProps
  extends Omit<ITextInputProps, 'validate'> {}

export enum InputVariants {
  TEXT = 'text',
}
