import { Text, TextVariants } from '../../../../atoms';
import { FeatureCard } from '../../../../molecules';
import { featureList } from './config';
import { AdvancedStatistics as AdvancedStatisticsStyles } from './styles';

export const AdvancedStatistics = () => {
  const renderFeatureCards = () => {
    return featureList.map((feature, index) => (
      <FeatureCard
        key={feature.icon}
        className={`feature-${index}`}
        {...feature}
      />
    ));
  };

  return (
    <AdvancedStatisticsStyles>
      <section className="section-heading">
        <Text variant={TextVariants.HEADING_ONE}>Advanced Statistics</Text>
        <Text className="sub-heading" variant={TextVariants.REGULAR_ONE}>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </Text>
      </section>
      <section className="feature-cards">
        <div className="horizontal-bar" />
        {renderFeatureCards()}
      </section>
    </AdvancedStatisticsStyles>
  );
};
