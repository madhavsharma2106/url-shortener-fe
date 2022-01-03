import styled from 'styled-components';
import { Breakpoints } from '../../../styles/helpers';

export const ShortenedLinkCard = styled.div`
  background-color: ${({ theme }) => theme.color.neutral.white};
  padding: 20px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  border-radius: 10px;

  .short-link {
    color: ${({ theme }) => theme.color.primary.cyan};
    text-align: end;
    flex: 1;
  }
  button {
    width: 120px;
  }

  @media (max-width: ${Breakpoints.MOBILE}) {
    flex-direction: column;
    padding: 0;
    gap: 0px;

    .original-link {
      width: 100%;
      padding: 20px;
      border-bottom: 1px solid ${({ theme }) => theme.color.neutral.offWhite};
    }
    .short-link {
      width: 100%;
      padding: 20px;
      text-align: left;
    }
    button {
      width: calc(100% - 30px);
      margin-bottom: 20px;
    }
  }
`;
