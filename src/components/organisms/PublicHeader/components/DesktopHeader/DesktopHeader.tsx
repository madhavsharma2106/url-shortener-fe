import {
  Button,
  ButtonSizes,
  ButtonTypes,
  ButtonVariants,
  Image,
  TextVariants,
} from '../../../../atoms';
import { DesktopHeader as DesktopHeaderStyles } from './styles';
import Logo from '../../.././../../assets/images/logo.svg';
import { Link } from '../../../../molecules';
import { navLinks } from '../../config';

export const DesktopHeader = () => {
  const renderNavLinks = () => {
    return navLinks.map(link => (
      <Link
        variant={TextVariants.REGULAR_ONE}
        className="link"
        key={link.name}
        to={link.to}
      >
        {link.name}
      </Link>
    ));
  };

  return (
    <DesktopHeaderStyles>
      <Image src={Logo} alt="Shortly's Logo" />
      <span className="nav-links">{renderNavLinks()}</span>
      <span className="ctas">
        <Link className="link" variant={TextVariants.REGULAR_ONE} to="#">
          Login
        </Link>
        <Button
          variant={ButtonVariants.PRIMARY}
          buttonType={ButtonTypes.ROUNDED}
          size={ButtonSizes.REGULAR}
        >
          Sign Up
        </Button>
      </span>
    </DesktopHeaderStyles>
  );
};
