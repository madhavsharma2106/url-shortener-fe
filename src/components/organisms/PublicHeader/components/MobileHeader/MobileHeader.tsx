import { MobileHeader as MobileHeaderStyles } from './styles';
import Logo from '../../.././../../assets/images/logo.svg';
import MenuIcon from '../../.././../../assets/images/hamburger-menu-icon.png';
import {
  Button,
  ButtonSizes,
  ButtonTypes,
  ButtonVariants,
  Image,
  TextVariants,
} from '../../../../atoms';
import { useState } from 'react';
import { Link } from '../../../../molecules';
import { navLinks } from '../../config';

export const MobileHeader = () => {
  const [isdropDownVisible, setIsDropdownVisible] = useState(false);

  const renderNavLinks = () => {
    return navLinks.map(link => (
      <Link variant={TextVariants.REGULAR_ONE} key={link.name} to={link.to}>
        {link.name}
      </Link>
    ));
  };

  const renderDropDown = () => {
    if (!isdropDownVisible) return;
    return (
      <div className="drop-down">
        <div className="nav-links">{renderNavLinks()}</div>
        <hr />
        <div className="ctas">
          <Link variant={TextVariants.REGULAR_ONE} to="#">
            Login
          </Link>
          <Button
            variant={ButtonVariants.PRIMARY}
            buttonType={ButtonTypes.ROUNDED}
            size={ButtonSizes.REGULAR}
          >
            Sign Up
          </Button>
        </div>
      </div>
    );
  };

  const toggleDropDown = () => {
    setIsDropdownVisible(!isdropDownVisible);
  };

  return (
    <MobileHeaderStyles>
      <Image src={Logo} alt="Shortly's Logo" />
      <Image
        isLink
        src={MenuIcon}
        onClick={toggleDropDown}
        alt="Shortly's Logo"
      />
      {renderDropDown()}
    </MobileHeaderStyles>
  );
};
