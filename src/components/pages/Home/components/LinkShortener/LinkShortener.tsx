import { useState } from 'react';
import {
  IShortenedLinkSuccessResponse,
  LinkShortnerService,
} from '../../../../../services';
import { useService } from '../../../../../utils';
import { ShortenedLinkCard, URLShortener } from '../../../../molecules';
import { LinkShortener as LinkShortnerStyles } from './styles';

export const LinkShortner = () => {
  const { exectue, loading, error } = useService(
    LinkShortnerService.shortenLink,
  );

  const [shortenedLinks, setShortenedLinks] = useState<
    IShortenedLinkSuccessResponse[]
  >(LinkShortnerService.getLinks());

  const shorten = (url: string) => {
    exectue(url).then((res: any) => {
      setShortenedLinks([...shortenedLinks, res.result]);
      LinkShortnerService.saveLinks([...shortenedLinks, res.result]);
    });
  };

  const renderShortenedLinkCards = () => {
    return shortenedLinks.map((link: any) => (
      <ShortenedLinkCard
        key={link.code}
        shortenedLink={link.short_link}
        originalLink={link.original_link}
        className="shortened-link"
      />
    ));
  };

  return (
    <LinkShortnerStyles>
      <URLShortener
        className="url-shortener"
        shorten={shorten}
        loading={loading}
        error={error}
      />
      <div className="shortened-links">{renderShortenedLinkCards()}</div>
    </LinkShortnerStyles>
  );
};
