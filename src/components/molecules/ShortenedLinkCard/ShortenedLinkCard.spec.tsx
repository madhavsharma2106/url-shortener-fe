import { screen, cleanup } from '@testing-library/react';
import { ShortenedLinkCard } from '.';
import { renderComponent } from '../../../utils';

afterEach(cleanup);

describe('<ShortenedLinkCard />', () => {
  it('should render', () => {
    renderComponent(
      <ShortenedLinkCard
        shortenedLink="https://g.co"
        originalLink="https://google.com/asdasd"
      />,
    );
    expect(screen.getByText('https://g.co')).toBeTruthy();
    expect(screen.getByText('https://google.com/asdasd')).toBeTruthy();
    expect(screen.getByText('Copy')).toBeTruthy();
  });
});
