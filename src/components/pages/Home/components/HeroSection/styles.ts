import styled from 'styled-components';
import { Breakpoints, container } from '../../../../../styles/helpers';

export const HeroSection = styled.section`
  ${container}
  padding: 150px 20px;
  position: relative;

  .hero-image {
    right: -15%;
    top: 15%;
    position: absolute;
  }
  .hero-text-area {
    max-width: 60%;
    position: relative;
    .sub-text {
      color: ${({ theme }) => theme.color.neutral.greyishViolet};
      margin-bottom: 30px;
      margin-top: 10px;
    }
  }
  @media (max-width: ${Breakpoints.MOBILE}) {
    padding: 30px 0 50px 0;
    overflow: hidden;

    .hero-text-area {
      text-align: center;
      max-width: 80%;
      margin: auto;
    }
    .hero-image {
      position: relative;
      max-width: 120vw;
      margin-bottom: 30px;
    }
  }
`;
