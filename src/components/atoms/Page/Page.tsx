import { Helmet } from 'react-helmet-async';
import { IPageProps } from './types';

export const Page = (props: IPageProps) => {
  const { title, description } = props;

  const renderDescription = () => {
    if (!description) return;
    return <meta name="description" content={description} />;
  };

  return (
    <Helmet>
      <title>{title}</title>
      {renderDescription()}
    </Helmet>
  );
};
