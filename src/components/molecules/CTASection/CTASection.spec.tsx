import { screen, cleanup } from '@testing-library/react';
import { CTASection } from '.';
import { renderComponent } from '../../../utils';

afterEach(cleanup);

describe('<CTASection />', () => {
  it('should render', () => {
    renderComponent(<CTASection />);
    expect(screen.getByText('Boost your links today')).toBeTruthy();
    expect(screen.getByText('Get Started')).toBeTruthy();
  });
});
