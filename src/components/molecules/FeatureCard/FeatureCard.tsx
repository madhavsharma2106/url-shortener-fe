import { Image, Text, TextVariants } from '../../atoms';
import { FeatureCard as FeatureCardStyles } from './styles';
import { IFeatureCardProps } from './types';

export const FeatureCard = (props: IFeatureCardProps) => {
  const { title, subText, icon, ...rest } = props;
  return (
    <FeatureCardStyles {...rest}>
      <div className="icon">
        <Image src={icon} alt={title} />
      </div>
      <Text variant={TextVariants.HEADING_TWO}>{title}</Text>
      <Text className="sub-text" variant={TextVariants.REGULAR_ONE}>
        {subText}
      </Text>
    </FeatureCardStyles>
  );
};
