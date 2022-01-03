import { screen, cleanup } from '@testing-library/react';
import { PublicFooter } from '.';
import { renderComponent } from '../../../utils';

afterEach(cleanup);

describe('<PublicFooter />', () => {
  it('should render', () => {
    renderComponent(<PublicFooter />);
    expect(
      screen.getByRole('img', { name: 'Shortly Logo' }),
    ).toBeInTheDocument();
  });
});
