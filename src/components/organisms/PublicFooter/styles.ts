import styled from 'styled-components';
import { Breakpoints, container } from '../../../styles/helpers';

export const Footer = styled.div`
  background-color: ${({ theme }) => theme.color.neutral.veryDarkViolet};
  padding: 60px 0;
  color: ${({ theme }) => theme.color.neutral.white};

  footer {
    ${container}
    display:grid;
    grid-template-columns: 25% auto 15%;
    grid-gap: 30px;

    .logo-container {
      filter: invert(1) brightness(2);
    }
    .nav-links {
      display: grid;
      grid-template-columns: repeat(3, auto);
      text-align: center;
      h3 {
        margin-bottom: 15px;
      }
      a {
        display: block;
        color: ${({ theme }) => theme.color.neutral.grey};
        &:hover {
          color: ${({ theme }) => theme.color.primary.cyan};
        }
      }
    }

    .sm-links {
      grid-template-columns: repeat(4, auto);
      display: grid;
      justify-items: center;
      grid-column-gap: 15px;
    }

    @media (max-width: ${Breakpoints.MOBILE}) {
      grid-template-columns: auto;
      justify-items: center;

      .nav-links {
        grid-template-columns: auto;
        gap: 20px;
      }
      .sm-links {
        justify-items: center;
      }
    }
  }
`;
