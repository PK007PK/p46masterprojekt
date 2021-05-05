import React from 'react';
import styled from 'styled-components';
import { FaCheckDouble } from '@react-icons/all-files/fa/FaCheckDouble';
import { BootsContainer } from './BootsElements';

const FooterStyles = styled.footer`
  background-color: var(--darkTxt);
  color: white;
  padding: 30px 0;

  .wrapper {
    display: flex;
    justify-content: space-between;
  }

  a {
    color: white;
  }

  p {
    margin: 0;
  }
`;

export default function Footer() {
  return (
    <FooterStyles>
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
