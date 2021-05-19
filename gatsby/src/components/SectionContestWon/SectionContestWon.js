import { useStaticQuery, graphql, Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import CardGrant from '../CardGrant/CardGrant';

import { BootsColumn, BootsContainer, BootsRow } from '../BootsElements';
import Button from '../Button/Button';

const GridSectionStyles = styled.section`
  padding: var(--sectionPaddingMob);

  ${({ theme }) => theme.media.mdAbove} {
    padding: var(--sectionPadding);
  }

  .grid {
    ${({ theme }) => theme.media.mdAbove} {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
`;

export default function SectionContestWon({ data }) {
  return (
    <GridSectionStyles className="sectionPaddings">
      <BootsContainer className="wrapper">
        <h2 className="leadTxt">Wygrane konkursy</h2>
        <p className="infoTxt">
          Od 2004 roku obsługujemy naszych Klientów w zakresie aplikowania o
          dotacje inwestycyjne. Obszarem naszych zainteresowań są fundusze
          strukturalne UE oraz środki krajowe. Do chwili obecnej pozyskaliśmy
          około 482 mln zł dotacji na blisko 180 projektów
        </p>
        <BootsRow>
          {data.slice(0, 4).map((item, index) => (
            <BootsColumn md="6" key={index}>
              <CardGrant
                key={index}
                title={item.projekt}
                company={item.podmiot}
                grant={item.dotacja}
              />
            </BootsColumn>
          ))}
        </BootsRow>
        <BootsRow>
          <BootsColumn md="8" />
          <BootsColumn md="4">
            <Button to="/portfolio">Portfolio</Button>
          </BootsColumn>
        </BootsRow>
      </BootsContainer>
    </GridSectionStyles>
  );
}
