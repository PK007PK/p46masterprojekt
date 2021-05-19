import styled from 'styled-components';
import { Link } from 'gatsby';

export const StyledButton = styled(Link)`
  padding: var(--paddingButton);
  font-size: var(--fontSizeRegular);
  box-shadow: ${({ theme }) => theme.elevation.dp1};
  transition: var(--transitionBasic);
  display: block;
  text-align: center;

  &:hover,
  &:focus {
    box-shadow: ${({ theme }) => theme.elevation.dp4};
  }
`;
