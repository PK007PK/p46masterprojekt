import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';

import { BootsContainer } from '../BootsElements';
import { GridTileStyles, SectionGridStyles } from './SectionGridStyles';

function GridTile({ title, link, imgSrc, subtitle }) {
  return (
    <GridTileStyles to={link}>
      <div className="wrapper">
        <GatsbyImage
          className="background"
          image={imgSrc}
          placeholder="blurred"
          alt="background"
          layout="fullWidth"
          formats={['auto', 'webp']}
        />
        <div className="txtWrapper">
          <div>
            <div className="titleWrapper">
              <h3 className="title">{title}</h3>
            </div>
            <p className="shortInfo">{subtitle}</p>
          </div>
          <div className="link">></div>
        </div>
      </div>
    </GridTileStyles>
  );
}

export default function SectionGrid() {
  const data = useStaticQuery(graphql`
    {
      projects: file(name: { eq: "z1" }) {
        childImageSharp {
          gatsbyImageData(placeholder: TRACED_SVG, formats: [AUTO, WEBP])
        }
      }
      rozliczanie: file(name: { eq: "z2" }) {
        childImageSharp {
          gatsbyImageData(placeholder: TRACED_SVG, formats: [AUTO, WEBP])
        }
      }
      finances: file(name: { eq: "z3" }) {
        childImageSharp {
          gatsbyImageData(placeholder: TRACED_SVG, formats: [AUTO, WEBP])
        }
      }
      services: file(name: { eq: "z4" }) {
        childImageSharp {
          gatsbyImageData(placeholder: TRACED_SVG, formats: [AUTO, WEBP])
        }
      }
    }
  `);

  return (
    <SectionGridStyles className="sectionPaddings">
      <BootsContainer>
        <h2 className="leadTxt">
          Od 2004 roku dla naszych Klientów pozyskaliśmy
          <br /> <span className="activeTxt">480 mln zł</span> dotacji na blisko
          <span className="activeTxt"> 180 projektów</span>
        </h2>
        <p className="infoTxt">
          Oferujemy kompleksową obsługę w zakresie aplikowania o fundusze i
          rozliczania otrzymanych środków. Oferta skierowana jest do jednostek
          samorządu terytorialnego oraz instytucji publicznych
        </p>
        <div className="grid">
          <div className="red">
            <GridTile
              title="Przygotowanie projektów"
              subtitle="Wykonujemy pełną dokumentację aplikacyjną: wnioski, załączniki, studia wykonalności..."
              link="/oferta#dok"
              imgSrc={data.projects.childImageSharp.gatsbyImageData}
              alt="Img"
            />
          </div>
          <div className="blue">
            <GridTile
              title="Rozliczanie projektów"
              subtitle="Rozliczamy kompleksowo projekty wybrane do dofinansowania"
              link="/oferta#roz"
              imgSrc={data.rozliczanie.childImageSharp.gatsbyImageData}
              alt="Img"
            />
          </div>
          <div className="yellow">
            <GridTile
              title="Analizy finansowe"
              subtitle="Analizy finansowe do dokumentacji aplikacyjnej: finansowe, ekonomiczne, wrażliwości, ryzyka..."
              link="/oferta#fin"
              imgSrc={data.finances.childImageSharp.gatsbyImageData}
              alt="Img"
            />
          </div>
          <div className="navy">
            <GridTile
              title="Stała obsługa"
              subtitle="Usługa swoim zakresem obejmują wszystko, co istotne dla
              skutecznego korzystania ze środków preferencyjnych. Stała obsługa w oparciu o abonament"
              link="/oferta#obs"
              imgSrc={data.services.childImageSharp.gatsbyImageData}
              alt="Img"
            />
          </div>
        </div>
      </BootsContainer>
    </SectionGridStyles>
  );
}
