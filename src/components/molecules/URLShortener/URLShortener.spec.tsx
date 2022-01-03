import { screen, cleanup, fireEvent, waitFor } from '@testing-library/react';
import { URLShortener } from '.';
import { renderComponent } from '../../../utils';

afterEach(cleanup);

describe('<URLShortener />', () => {
  it('should render', () => {
    renderComponent(
      <URLShortener shorten={() => null} loading={false} error={null} />,
    );
    expect(screen.getByText('Shorten it!')).toBeTruthy();
    expect(screen.getByPlaceholderText('Shorten a link here...')).toBeTruthy();
  });

  it('should show error when attempting to submit without a URL', async () => {
    renderComponent(
      <URLShortener shorten={() => null} loading={false} error={null} />,
    );

    fireEvent.click(screen.getByText('Shorten it!'));
    expect(await screen.findByText('Please add a link')).toBeTruthy();
  });

  it('should show error when attempting to submit wit an invalid URL', async () => {
    renderComponent(
      <URLShortener shorten={() => null} loading={false} error={null} />,
    );

    fireEvent.change(screen.getByPlaceholderText('Shorten a link here...'), {
      target: { value: 'abcd' },
    });
    fireEvent.click(screen.getByText('Shorten it!'));
    expect(
      await screen.findByText('Oops! Looks like the URL isnt valid.'),
    ).toBeTruthy();
  });

  it('Should not show an error when a form is filled with valid URL', async () => {
    renderComponent(
      <URLShortener shorten={() => null} loading={false} error={null} />,
    );

    fireEvent.change(screen.getByPlaceholderText('Shorten a link here...'), {
      target: { value: 'google.com' },
    });
    fireEvent.click(screen.getByText('Shorten it!'));

    await waitFor(() => {
      expect(
        screen.queryByText('Oops! Looks like the URL isnt valid.'),
      ).not.toBeInTheDocument();
    });
  });
});
