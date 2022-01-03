import styled from 'styled-components';
import { container } from '../../../../../styles/helpers';

export const DesktopHeader = styled.nav`
  ${container};
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  color: ${({ theme }) => theme.color.neutral.greyishViolet};

  .nav-links {
    gap: 40px;
    flex: 1;
    display: flex;
  }
  .ctas {
    button {
      margin-left: 40px;
    }
  }

  .link {
    &:hover {
      color: ${({ theme }) => theme.color.primary.darkViolet};
    }
  }
`;
