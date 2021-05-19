import React from 'react';
import styled from 'styled-components';
import CardGrant from '../CardGrant/CardGrant';

import { BootsColumn, BootsContainer, BootsRow } from '../BootsElements';

const PortfolioSectionStyles = styled.section`
  .grid {
    ${({ theme }) => theme.media.mdAbove} {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
`;

export default function SectionPortfolio({ data }) {
  return (
    <PortfolioSectionStyles className="sectionPaddings">
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
