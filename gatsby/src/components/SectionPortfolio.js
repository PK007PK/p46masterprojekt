import { useStaticQuery, graphql, Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import CardGrant from './CardGrant';

import { BootsColumn, BootsContainer, BootsRow } from './BootsElements';

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
        <BootsRow>
          {data.map((item, index) => (
            <BootsColumn md="6" key={index}>
              <CardGrant
                title={item.projekt}
                company={item.podmiot}
                grant={item.dotacja}
              />
            </BootsColumn>
          ))}
        </BootsRow>
      </BootsContainer>
    </PortfolioSectionStyles>
  );
}
