import { Fragment } from 'react';
import { Page } from '../../atoms';
import { CTASection } from '../../molecules';
import { PublicWebsite } from '../../templates';
import { AdvancedStatistics, HeroSection, LinkShortner } from './components';

export const Home = () => {
  return (
    <Fragment>
      <Page
        title="Shortly - More than just shorter links"
        description="Build your brands recogntion and get detailed insights on how your links are performing."
      />
      <PublicWebsite>
        <HeroSection />
        <LinkShortner />
        <AdvancedStatistics />
        <CTASection />
      </PublicWebsite>
    </Fragment>
  );
};
