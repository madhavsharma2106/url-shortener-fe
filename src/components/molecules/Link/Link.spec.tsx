import { screen, cleanup } from '@testing-library/react';
import { Link } from '.';
import { renderComponent } from '../../../utils';
import { TextVariants } from '../../atoms';

afterEach(cleanup);

describe('<Link />', () => {
  it('should render', () => {
    renderComponent(
      <Link to="#" variant={TextVariants.REGULAR_ONE}>
        Link to somewhere cool
      </Link>,
    );
    expect(screen.getByText('Link to somewhere cool')).toBeTruthy();
  });
});
