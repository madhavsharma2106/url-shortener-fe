import { Fragment } from 'react';
import { PublicFooter, PublicHeader } from '../../organisms';
import { IPublicWebsiteProps } from './types';

export const PublicWebsite = (props: IPublicWebsiteProps) => {
  const { children } = props;

  return (
    <Fragment>
      <PublicHeader />
      {children}
      <PublicFooter />
    </Fragment>
  );
};
