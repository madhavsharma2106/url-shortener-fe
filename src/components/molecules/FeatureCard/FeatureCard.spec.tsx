import { screen, cleanup } from '@testing-library/react';
import { FeatureCard } from '.';
import { renderComponent } from '../../../utils';
import Image from '../../../assets/images/logo.svg';

afterEach(cleanup);

describe('<FeatureCard />', () => {
  it('should render', () => {
    renderComponent(
      <FeatureCard title="test title" subText="lorem ipsum" icon={Image} />,
    );
    expect(screen.getByText('test title')).toBeTruthy();
    expect(screen.getByText('lorem ipsum')).toBeTruthy();
    const icon = screen.getByRole('img');
    expect(icon).toHaveAttribute('src', 'logo.svg');
    expect(icon).toHaveAttribute('alt', 'test title');
  });
});
