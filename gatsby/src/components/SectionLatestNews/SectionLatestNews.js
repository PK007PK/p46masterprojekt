import React from 'react';
import styled from 'styled-components';
import { BootsColumn, BootsContainer, BootsRow } from '../BootsElements';
import Button from '../Button/Button';
import CardSimple from '../CardSimple/CardSimple';

const LatestNewsStyles = styled.section``;

export default function LatestNews({ data }) {
  return (
    <LatestNewsStyles className="sectionPaddings">
      <BootsContainer>
        <h2 className="leadTxt">Najnowsze informacje</h2>
        <p className="infoTxt">Aktualności, wydarzenia, konkursy</p>
        <BootsRow className="newsWrapper">
          {data.map((item, index) => (
            <BootsColumn md="4" key={index}>
              <CardSimple
                category={`${item.categories[0]?.name} ${
                  item.categories[1]?.name ? item.categories[1]?.name : ''
                }`}
                title={item.name}
                subtitle={item.lead}
                link={`/${item.slug.current}`}
                date={item.date}
                imgSrc={item.image?.asset?.gatsbyImageData}
                style={{ marginBottom: '25px' }}
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
