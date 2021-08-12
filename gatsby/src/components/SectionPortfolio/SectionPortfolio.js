import React, { useState } from 'react';
import styled from 'styled-components';
import CardGrant from '../CardGrant/CardGrant';
import { allTypes } from '../../assets/data/allConsultingProjects';
import { BootsColumn, BootsContainer, BootsRow } from '../BootsElements';
import Button from '../Button/Button';

const PortfolioSectionStyles = styled.section`
  .grid {
    ${({ theme }) => theme.media.mdAbove} {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }

  .buttonWrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: var(--spacingRegular);

    button {
      margin: 10px;
    }
  }
`;

const dataForButtons = Object.keys(allTypes).map((key) => allTypes[key]);

export default function SectionPortfolio({ data }) {
  const [projectType, setProjectType] = useState('all');

  function handleClick(event) {
    setProjectType(event.target.dataset.type);
  }

  return (
    <PortfolioSectionStyles className="sectionPaddings">
      <BootsContainer className="wrapper">
        <div className="buttonWrapper">
          {dataForButtons.map((button) => (
            <Button
              typeX="button"
              key={button.value}
              data-type={button.value}
              onClick={handleClick}
              as="button"
            >
              {button.name}
            </Button>
          ))}
        </div>
        <BootsRow>
          {data
            .filter((item) => {
              if (projectType === 'all') {
                return true;
              }
              return item.typ.includes(projectType);
            })
            .map((item, index) => (
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
