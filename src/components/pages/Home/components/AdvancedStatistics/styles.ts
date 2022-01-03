import styled from 'styled-components';
import { Breakpoints, container } from '../../../../../styles/helpers';

export const AdvancedStatistics = styled.section`
  padding: 60px 0;
  background-color: ${({ theme }) => theme.color.neutral.offWhite};

  .section-heading {
    ${container};
    text-align: center;
    .sub-heading {
      margin: auto;
      max-width: 500px;
      color: ${({ theme }) => theme.color.neutral.greyishViolet};
    }
  }
  .feature-cards {
    ${container};
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 5%;
    align-items: center;
    position: relative;

    .horizontal-bar {
      position: absolute;
      height: 10px;
      width: 70%;
      background-color: ${({ theme }) => theme.color.primary.cyan};
      top: 55%;
      left: 20%;
    }

    .feature-1 {
      margin-top: 80px;
    }

    .feature-2 {
      margin-top: 160px;
    }
    @media (max-width: ${Breakpoints.MOBILE}) {
      grid-template-columns: auto;
      gap: 100px;
      margin-top: 100px;
      .horizontal-bar {
        height: 70%;
        width: 10px;
        top: 25%;
        left: calc(50% - 5px);
      }
      .feature-2,
      .feature-1 {
        margin-top: 0;
      }
      .icon {
        left: calc(50% - 40px);
      }
    }
  }
`;
