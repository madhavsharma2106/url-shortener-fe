import { screen, cleanup } from '@testing-library/react';
import { Button, ButtonSizes, ButtonTypes, ButtonVariants } from '.';
import { renderComponent } from '../../../utils';

afterEach(cleanup);

describe('<Button />', () => {
  it('should render', () => {
    renderComponent(
      <Button
        buttonType={ButtonTypes.REGULAR}
        variant={ButtonVariants.PRIMARY}
        size={ButtonSizes.REGULAR}
      >
        Click Me!
      </Button>,
    );
    expect(screen.getByText('Click Me!')).toBeTruthy();
  });
});
