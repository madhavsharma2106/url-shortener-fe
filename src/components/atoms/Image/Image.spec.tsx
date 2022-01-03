import { screen, cleanup } from '@testing-library/react';
import { Image } from '.';
import ImageSrc from '../../../assets/images/logo.svg';
import { renderComponent } from '../../../utils';

afterEach(cleanup);

describe('<Image />', () => {
  it('should render', () => {
    renderComponent(<Image src={ImageSrc} alt="test image alt" />);
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', 'logo.svg');
    expect(image).toHaveAttribute('alt', 'test image alt');
  });
});
