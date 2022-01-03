import {
  Button,
  ButtonSizes,
  ButtonTypes,
  ButtonVariants,
  Image,
  Text,
  TextVariants,
} from '../../../../atoms';
import IllustrationWorking from '../../../../../assets/images/illustration-working.svg';

import { HeroSection as HeroSectionStyles } from './styles';

export const HeroSection = () => {
  return (
    <HeroSectionStyles>
      <Image
        className="hero-image"
        src={IllustrationWorking}
        alt="A person shortening their links"
      />
      <div className="hero-text-area">
        <Text variant={TextVariants.HERO}>More than just shorter links</Text>
        <Text className="sub-text" variant={TextVariants.HERO_SUB_TEXT}>
          Build your brands recogntion and get detailed insights on how your
          links are performing.
        </Text>
        <Button
          variant={ButtonVariants.PRIMARY}
          size={ButtonSizes.LARGE}
          buttonType={ButtonTypes.ROUNDED}
        >
          Get Started
        </Button>
      </div>
    </HeroSectionStyles>
  );
};
