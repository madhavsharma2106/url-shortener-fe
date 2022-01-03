import { ITextProps } from '.';
import { TextVariantStyles } from './config';
import { Text as TextStyles } from './styles';

export const Text = (props: ITextProps) => {
  const { children, variant, ...rest } = props;
  const { tag, ...restStyles } = TextVariantStyles[variant];

  return (
    <TextStyles as={tag} {...restStyles} {...rest}>
      {children}
    </TextStyles>
  );
};
