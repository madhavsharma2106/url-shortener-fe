import styled from 'styled-components';

export const FeatureCard = styled.article`
  background-color: ${({ theme }) => theme.color.neutral.white};
  padding: 30px;
  padding-top: 70px;
  position: relative;
  .icon {
    background-color: ${({ theme }) => theme.color.primary.darkViolet};
    padding: 10px;
    height: 80px;
    width: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    position: absolute;
    top: -40px;
  }
  .sub-text {
    margin-top: 10px;
    color: ${({ theme }) => theme.color.neutral.greyishViolet};
  }
`;
