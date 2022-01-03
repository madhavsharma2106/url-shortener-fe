import styled from 'styled-components';
import { container } from '../../../../../styles/helpers';

export const LinkShortener = styled.section`
  background: ${({ theme }) => theme.color.neutral.offWhite};
  .url-shortener {
    background: linear-gradient(
      180deg,
      ${({ theme }) => theme.color.neutral.white} 50%,
      transparent 50%
    );
  }
  .shortened-links {
    ${container}
    .shortened-link {
      margin-top: 20px;
    }
  }
`;
