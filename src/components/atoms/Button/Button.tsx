import { IButtonProps } from './types';
import { Button as ButtonStyles } from './styles';

export const Button = (props: IButtonProps) => {
  const { children, loading, ...rest } = props;

  return (
    <ButtonStyles $loading={loading} {...rest}>
      {children}
    </ButtonStyles>
  );
};
