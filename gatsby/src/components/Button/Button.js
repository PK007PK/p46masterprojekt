import React from 'react';
import { StyledButton } from './Button.styles';

const Button = (props) => (
  <StyledButton {...props}>{props.children}</StyledButton>
);

export default Button;
