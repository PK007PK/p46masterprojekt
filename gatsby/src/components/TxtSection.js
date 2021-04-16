import React from 'react';
import styled from 'styled-components';
import { BootsContainer } from './BootsElements';

const TxtSectionStyles = styled.section`
  padding: var(--sectionPadding);
`;

export default function TxtSection() {
  return (
    <TxtSectionStyles>
      <BootsContainer>
        <h2 className="leadTxt">
          Od 2002 roku dla naszych Klientów pozyskaliśmy
          <br /> <span className="activeTxt">480 mln zł</span> dotacji na blisko
          <span className="activeTxt"> 180 projektów</span>
        </h2>
      </BootsContainer>
    </TxtSectionStyles>
  );
}
