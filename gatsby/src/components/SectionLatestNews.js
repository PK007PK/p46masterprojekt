import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { BootsColumn, BootsContainer, BootsRow } from './BootsElements';
import Button from './Button';
import CardSimple2 from './CardSimple';

const LatestNewsStyles = styled.section`
  padding: var(--sectionPaddingMob);

  ${({ theme }) => theme.media.mdAbove} {
    padding: var(--sectionPadding);
  }

  .readMoreWrapper {
    text-align: right;

    a {
      line-height: 1;
      color: var(--darkTxt);
      /* font-size: var(--headingSize); */
      /* margin-right: var(--cardPadding); */
    }
  }
`;

export default function LatestNews({ data }) {
  return (
    <LatestNewsStyles>
      <BootsContainer>
        <h2 className="leadTxt">Najnowsze informacje</h2>
        <p className="infoTxt">Aktualności, wydarzenia, konkursy</p>
        <BootsRow className="newsWrapper">
          {data.map((item, index) => (
            <BootsColumn md="4" key={index}>
              <CardSimple2
                category="Aktualności"
                title={item.name}
                subtitle={item.lead}
                link={`/${item.slug.current}`}
                date={item.date}
                imgSrc={item.image?.asset?.gatsbyImageData}
              />
            </BootsColumn>
          ))}
        </BootsRow>
        <BootsRow>
          <BootsColumn md="8" />
          <BootsColumn md="4">
            <Button to="/blog/1">Zobacz wszystkie wpisy</Button>
          </BootsColumn>
        </BootsRow>
      </BootsContainer>
    </LatestNewsStyles>
  );
}
