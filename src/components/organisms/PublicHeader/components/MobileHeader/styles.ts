import styled from 'styled-components';

export const MobileHeader = styled.nav`
  margin-top: 30px;
  padding: 0 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  .drop-down {
    position: absolute;
    top: 50px;
    background-color: ${({ theme }) => theme.color.primary.darkViolet};
    border-radius: 10px;
    width: calc(100% - 50px);
    padding: 20px;
    color: ${({ theme }) => theme.color.neutral.white};
    text-align: center;
    z-index: 2;

    .ctas,
    .nav-links {
      display: flex;
      gap: 10px;
      flex-direction: column;
      padding: 10px;
    }

    hr {
      border: none;
      border-top: 0.01px solid ${({ theme }) => theme.color.neutral.grey};
      opacity: 0.4;
    }
  }
`;
