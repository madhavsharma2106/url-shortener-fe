import styled from 'styled-components';
import BgShortenDesktop from '../../../assets/images/bg-shorten-desktop.svg';
import BgShortenMobile from '../../../assets/images/bg-shorten-mobile.svg';
import { Breakpoints, container } from '../../../styles/helpers';

export const URLShortener = styled.div`
  section {
    ${container};
    form {
      background-image: url(${BgShortenDesktop});
      background-size: cover;
      border-radius: 10px;
      background-color: ${({ theme }) => theme.color.primary.darkViolet};
      padding: 60px;
      display: flex;
      gap: 20px;

      .shorten-input {
        flex: 1;
      }
      button {
        align-self: flex-start;
      }
    }
    @media (max-width: ${Breakpoints.MOBILE}) {
      form {
        padding: 30px;

        background-image: url(${BgShortenMobile});
        flex-direction: column;
      }
      button {
        width: 100%;
      }
    }
  }
`;
