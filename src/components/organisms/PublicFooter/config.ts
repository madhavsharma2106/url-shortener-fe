import FacebookIcon from '../../../assets/images/icon-facebook.svg';
import PinterestIcon from '../../../assets/images/icon-pinterest.svg';
import TwitterIcon from '../../../assets/images/icon-twitter.svg';
import InstagramIcon from '../../../assets/images/icon-instagram.svg';
import { ISocialMediaLink } from './types';

export const socialMediaLinks: ISocialMediaLink[] = [
  {
    icon: FacebookIcon,
    alt: "Link to Shortly's Facebook page",
    to: '#',
  },
  {
    icon: PinterestIcon,
    alt: "Link to Shortly's Pinterest page",
    to: '#',
  },
  {
    icon: TwitterIcon,
    alt: "Link to Shortly's Tiwtter page",
    to: '#',
  },
  {
    icon: InstagramIcon,
    alt: "Link to Shortly's Instagram page",
    to: '#',
  },
];

export const navLinks = [
  {
    title: 'Features',
    links: [
      { name: 'Link Shortening', to: '#' },
      { name: 'Branded Links', to: '#' },
      { name: 'Analytics', to: '#' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { name: 'Blog', to: '#' },
      { name: 'Developers', to: '#' },
      { name: 'Support', to: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'About', to: '#' },
      { name: 'Our Team', to: '#' },
      { name: 'Careers', to: '#' },
      { name: 'Contact', to: '#' },
    ],
  },
];
