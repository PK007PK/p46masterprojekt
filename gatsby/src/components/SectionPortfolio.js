import { useStaticQuery, graphql, Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import CardGrant from './CardGrant';

import { BootsContainer } from './BootsElements';

const PortfolioSectionStyles = styled.section`
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

  .title {
    margin-bottom: 50px;
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

export default function SectionPortfolio({ data }) {
  return (
    <PortfolioSectionStyles>
      <BootsContainer className="wrapper">
        <h2 className="leadTxt title">Wygrane konkursy</h2>
        <div className="grid">
          {data.map((item, index) => (
            <CardGrant
              key={index}
              title={item.projekt}
              company={item.podmiot}
              grant={item.dotacja}
            />
          ))}
        </div>
      </BootsContainer>
    </PortfolioSectionStyles>
  );
}
