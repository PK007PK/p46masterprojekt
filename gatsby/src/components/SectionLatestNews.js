import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { BootsColumn, BootsContainer, BootsRow } from './BootsElements';
import CardSimple from './CardSimple';

const LatestNewsStyles = styled.section`
  padding: var(--sectionPaddingMob);

  ${({ theme }) => theme.media.mdAbove} {
    padding: var(--sectionPadding);
  }

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

export default function LatestNews({ data }) {
  console.log(data);
  return (
    <LatestNewsStyles>
      <BootsContainer>
        <h2 className="leadTxt">Najnowsze informacje</h2>
        <p className="infoTxt">Aktualności, wydarzenia, konkursy</p>
        <BootsRow className="newsWrapper">
          {data.map((item, index) => (
            <BootsColumn sm="4" key={index}>
              <CardSimple
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
        <div className="readMoreWrapper">
          <Link to="/blog/1">Zobacz wszystkie wpisy</Link>
        </div>
      </BootsContainer>
    </LatestNewsStyles>
  );
}
