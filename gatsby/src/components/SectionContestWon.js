import { useStaticQuery, graphql, Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import CardGrant from './CardGrant';

import { BootsColumn, BootsContainer, BootsRow } from './BootsElements';
import Button from './Button';

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

  .readMoreWrapper {
    text-align: right;
    margin-bottom: 50px;

    a {
      line-height: 1;
      color: var(--activeTxt);
      font-size: var(--headingSize);
      margin-right: var(--cardPadding);
    }
  }
`;

export default function SectionContestWon({ data }) {
  return (
    <GridSectionStyles>
      <BootsContainer className="wrapper">
        <h2 className="leadTxt">Wygrane konkursy</h2>
        <p className="infoTxt">
          Od 2004 roku obsługujemy naszych Klientów w zakresie aplikowania o
          dotacje inwestycyjne. Obszarem naszych zainteresowań są fundusze
          strukturalne UE oraz środki krajowe. Do chwili obecnej pozyskaliśmy
          około 482 mln zł dotacji na blisko 180 projektów
        </p>
        <div className="grid">
          {data.slice(0, 4).map((item, index) => (
            <CardGrant
              key={index}
              title={item.projekt}
              company={item.podmiot}
              grant={item.dotacja}
            />
          ))}
        </div>
        <BootsRow>
          <BootsColumn md="6" />
          <BootsColumn md="6">
            <Button to="/portfolio">Portfolio</Button>
          </BootsColumn>
        </BootsRow>
      </BootsContainer>
    </GridSectionStyles>
  );
}
