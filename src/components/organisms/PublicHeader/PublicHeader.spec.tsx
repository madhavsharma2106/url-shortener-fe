import { screen, cleanup } from '@testing-library/react';
import { PublicHeader } from '.';
import { renderComponent } from '../../../utils';

afterEach(cleanup);

describe('<PublicHeader />', () => {
  it('should render', () => {
    renderComponent(<PublicHeader />);
    expect(
      screen.getAllByRole('img', { name: "Shortly's Logo" }),
    ).not.toBeNull();
  });
});
