import { TextInput } from './TextInput';
import { IInputProps, InputVariants } from './types';

export const Input = (props: IInputProps) => {
  const { variant, ...rest } = props;
  const renderInput = () => {
    switch (variant) {
      case InputVariants.TEXT:
      default: {
        return <TextInput {...rest} />;
      }
    }
  };
  return renderInput();
};
