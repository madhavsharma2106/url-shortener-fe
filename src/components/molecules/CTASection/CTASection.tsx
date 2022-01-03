import {
  Text,
  TextVariants,
  Button,
  ButtonVariants,
  ButtonTypes,
  ButtonSizes,
} from '../../atoms';
import { CTASection as CTASectionStyles } from './styles';

export const CTASection = () => {
  return (
    <CTASectionStyles>
      <Text variant={TextVariants.HEADING_ONE}>Boost your links today</Text>
      <Button
        variant={ButtonVariants.PRIMARY}
        buttonType={ButtonTypes.ROUNDED}
        size={ButtonSizes.LARGE}
      >
        Get Started
      </Button>
    </CTASectionStyles>
  );
};
