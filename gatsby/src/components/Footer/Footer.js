import React from 'react';
import { FaCheckDouble } from '@react-icons/all-files/fa/FaCheckDouble';
import { BootsContainer } from '../BootsElements';
import { FooterStyles } from './Footer.styles';

export default function Footer(props) {
  return (
    <FooterStyles {...props}>
      <BootsContainer className="wrapper">
        <p className="copyryght">
          &copy; Masterprojekt S.C.
          {new Date().getFullYear()}
        </p>
        <a href="https://krasny.netlify.app/programming" target="blank">
          <p>
            <FaCheckDouble style={{ marginRight: '5px' }} />
            PK
          </p>
        </a>
      </BootsContainer>
    </FooterStyles>
  );
}
