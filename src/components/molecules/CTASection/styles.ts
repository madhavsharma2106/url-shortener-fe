import styled from 'styled-components';
import BgBoostDesktop from '../../../assets/images/bg-boost-desktop.svg';
import BgBoostMobile from '../../../assets/images/bg-boost-mobile.svg';
import { Breakpoints } from '../../../styles/helpers';

export const CTASection = styled.section`
  background-color: ${({ theme }) => theme.color.primary.darkViolet};
  background-image: url(${BgBoostDesktop});
  background-size: cover;

  padding: 60px 0;
  color: white;
  text-align: center;
  button {
    margin-top: 20px;
  }
  @media (max-width: ${Breakpoints.MOBILE}) {
    background-image: url(${BgBoostMobile});
  }
`;
