import styled from 'styled-components';

export const CardGrantStyles = styled.div`
  margin-bottom: var(--spacingRegular);
  padding: var(--paddingCard);
  box-shadow: ${({ theme }) => theme.elevation.dp1};
  transition: var(--transitionBasic);
  position: relative;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;

  &:hover,
  &:focus {
    box-shadow: ${({ theme }) => theme.elevation.dp4};
  }
  .company,
  .grant,
  .title {
    font-size: var(--fontSizeRegular);
    line-height: 1.3;
    margin: 0;
  }

  .title {
    margin: var(--spacingRegular) 0;
  }

  .company {
    font-weight: bold;
  }
  .grant {
    color: var(--red);
  }
`;
