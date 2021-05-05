import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const StyledButton = styled(Link)`
  display: block;
  padding: var(--cardPadding);
  text-align: center;
  font-size: 16px;
  box-shadow: ${({ theme }) => theme.elevation.dp1};

  &:hover {
    box-shadow: ${({ theme }) => theme.elevation.dp4};
  }
`;

const Button = ({ children }) => <StyledButton>{children}</StyledButton>;

export default Button;
