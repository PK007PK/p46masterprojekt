import { useStaticQuery, graphql, Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import CardGrant from './CardGrant';

import { BootsContainer } from './BootsElements';

const GridSectionStyles = styled.section`
  padding: var(--sectionPadding);

  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
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

export default function SectionContestWon() {
  return (
    <GridSectionStyles>
      <BootsContainer className="wrapper">
        <h2 className="leadTxt">Wygrane konkursy</h2>
        <p className="infoTxt">
          Od 2002 roku obsługujemy naszych Klientów w zakresie aplikowania o
          dotacje inwestycyjne. Obszarem naszych zainteresowań są fundusze
          strukturalne UE oraz środki krajowe. Do chwili obecnej pozyskaliśmy
          około 482 mln zł dotacji na blisko 180 projektów.
        </p>
        <div className="grid">
          <CardGrant
            title="Poprawa wskaźnika zdrowych urodzeń oraz ograniczenie negatywnych skutków wielochorobowości wieku dojrzałego i starszego poprzez unowocześnienie zaplecza diagnostyczno-leczniczego w Szpitalu Zakonu Bonifratrów w Katowicach sp. z o.o."
            company="Szpital Zakonu Bonifratrów w Katowicach sp. z o.o."
            grant="1 000 000 zł"
          />
          <CardGrant
            title="Poprawa wskaźnika zdrowych urodzeń oraz ograniczenie negatywnych skutków wielochorobowości wieku dojrzałego i starszego poprzez unowocześnienie zaplecza diagnostyczno-leczniczego w Szpitalu Zakonu Bonifratrów w Katowicach sp. z o.o."
            company="Szpital Zakonu Bonifratrów w Katowicach sp. z o.o."
            grant="1 000 000 zł"
          />
          <CardGrant
            title="Poprawa wskaźnika zdrowych urodzeń oraz ograniczenie negatywnych skutków wielochorobowości wieku dojrzałego i starszego poprzez unowocześnienie zaplecza diagnostyczno-leczniczego w Szpitalu Zakonu Bonifratrów w Katowicach sp. z o.o."
            company="Szpital Zakonu Bonifratrów w Katowicach sp. z o.o."
            grant="1 000 000 zł"
          />
          <CardGrant
            title="Poprawa wskaźnika zdrowych urodzeń oraz ograniczenie negatywnych skutków wielochorobowości wieku dojrzałego i starszego poprzez unowocześnienie zaplecza diagnostyczno-leczniczego w Szpitalu Zakonu Bonifratrów w Katowicach sp. z o.o."
            company="Szpital Zakonu Bonifratrów w Katowicach sp. z o.o."
            grant="1 000 000 zł"
          />
        </div>
        <div className="readMoreWrapper">
          <Link to="ddd">Zobacz wszystkie wygrane konkursy</Link>
        </div>
      </BootsContainer>
    </GridSectionStyles>
  );
}
