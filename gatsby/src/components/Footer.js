import React from 'react';
import styled from 'styled-components';
import { BootsContainer } from './BootsElements';

const FooterStyles = styled.footer`
  background-color: var(--darkTxt);
  color: white;
  padding: var(--cardPadding) 0;
`;

export default function Footer() {
  return (
    <FooterStyles>
      <BootsContainer>Footer</BootsContainer>
    </FooterStyles>
  );
}
