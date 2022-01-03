import Logo from '../../../assets/images/logo.svg';
import { Footer } from './styles';
import { Image, Text, TextVariants } from '../../atoms';
import { navLinks, socialMediaLinks } from './config';
import { Link } from '../../molecules';

export const PublicFooter = () => {
  const renderSocialMediaLinks = () => {
    return socialMediaLinks.map(link => (
      <Image
        key={link.alt}
        isLink
        to={link.to}
        src={link.icon}
        alt={link.alt}
      />
    ));
  };

  const renderNavLinks = () => {
    return navLinks.map(category => (
      <div key={category.title} className="category">
        <Text variant={TextVariants.HEADING_THREE} onClick={() => alert()}>
          {category.title}
        </Text>
        {category.links.map(link => (
          <Link to={link.to} variant={TextVariants.REGULAR_ONE} key={link.name}>
            {link.name}
          </Link>
        ))}
      </div>
    ));
  };

  return (
    <Footer>
      <footer>
        <div className="logo-container">
          <Image isLink to="#" src={Logo} alt="Shortly Logo" />
        </div>
        <div className="nav-links">{renderNavLinks()}</div>
        <div className="sm-links">{renderSocialMediaLinks()}</div>
      </footer>
    </Footer>
  );
};
