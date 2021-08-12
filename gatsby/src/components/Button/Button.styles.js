import styled from 'styled-components';
import { Link } from 'gatsby';

export const StyledButton = styled(Link)`
  padding: var(--paddingButton);
  font-size: var(--fontSizeRegular);
  box-shadow: ${({ theme }) => theme.elevation.dp1};
  transition: var(--transitionBasic);
  display: block;
  text-align: center;
  background-color: var(--colorWhite);
  border: none;

  &:hover,
  &:focus {
    box-shadow: ${({ theme }) => theme.elevation.dp4};
    background-color: var(--deepBlue);
    color: var(--offWhite);
  }
  &:active {
  }
`;
