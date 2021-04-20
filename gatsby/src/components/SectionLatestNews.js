import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { BootsColumn, BootsContainer, BootsRow } from './BootsElements';
import CardSimple from './CardSimple';

const LatestNewsStyles = styled.section`
  padding: var(--sectionPadding);

  .readMoreWrapper {
    text-align: right;
    margin-top: 50px;

    a {
      line-height: 1;
      color: var(--activeTxt);
      font-size: var(--headingSize);
      margin-right: var(--cardPadding);
    }
  }
`;

export default function LatestNews() {
  return (
    <LatestNewsStyles>
      <BootsContainer>
        <h2 className="leadTxt">Najnowsze informacje</h2>
        <p className="infoTxt">Aktualności, wydarzenia, konkursy</p>
        <BootsRow className="newsWrapper">
          <BootsColumn md="4">
            <CardSimple
              category="Aktualności"
              title="Zamknięcie działalności"
              subtitle="Irure cupidatat quis proident labore ex esse voluptate sit occaecat excepteur"
              link="dddd"
              date="2020.12.11"
            />
          </BootsColumn>
          <BootsColumn md="4">
            <CardSimple
              category="Dotacje"
              title="Dotecje na innowacje"
              subtitle="Cillum occaecat velit nulla reprehenderit labore laboris reprehenderit exercitation laborum pariatur"
              link="dddd"
              date="2020.12.11"
            />
          </BootsColumn>
          <BootsColumn md="4">
            <CardSimple
              category="Dotacje"
              title="Bon na mleko zawsze z rana jak śmietana"
              subtitle="Culpa nisi id ut sint anim minim qui velit incididunt cupidatat velit eiusmod"
              link="dddd"
              date="2020.12.11"
            />
          </BootsColumn>
        </BootsRow>
        <div className="readMoreWrapper">
          <Link to="ddd">Zobacz wszystkie wpisy</Link>
        </div>
      </BootsContainer>
    </LatestNewsStyles>
  );
}
