import { useStaticQuery, graphql, Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';

import { BootsContainer } from './BootsElements';

const SectionGridStyles = styled.section`
  padding: var(--sectionPaddingMob);

  ${({ theme }) => theme.media.mdAbove} {
    padding: var(--sectionPadding);
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 400px 400px 400px 400px;
    grid-template-areas:
      'prep'
      'obt'
      'fin'
      'serv';

    ${({ theme }) => theme.media.mdAbove} {
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 50% 50%;
      grid-template-areas:
        'prep prep serv'
        'obt fin serv';
    }

    ${({ theme }) => theme.media.lgAbove} {
      height: 100vh;
      max-height: 700px;
    }
  }

  .red {
    grid-area: prep;
  }

  .blue {
    grid-area: obt;
  }

  .yellow {
    grid-area: fin;
  }

  .navy {
    grid-area: serv;
  }
`;

const GridTileStyles = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  .background {
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* filter: sepia(80%); */
    /* filter: grayscale(90%); */
    /* filter: hue-rotate(90deg); */
    /* filter: invert(75%); */
    filter: saturate(30%);
  }

  .txt {
    z-index: 2;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    transition: var(--basicTransition);
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &:hover {
      background-color: var(--darkTxt);
    }

    .titleWrapper {
      background-color: rgba(0, 0, 0, 0.5);
      padding: var(--cardPadding);
      transition: var(--basicTransition);
    }

    &:hover .titleWrapper {
      background-color: rgba(0, 0, 0, 0);
    }

    .title {
      transition: var(--basicTransition);
      font-size: var(--headingSize);
      font-weight: 600;
      color: white;
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
    }

    &:hover .title {
      color: var(--activeTxt);
    }

    .shortInfo {
      transition: var(--basicTransition);
      color: white;
      margin: 0 25px;
      opacity: 0;
    }

    &:hover .shortInfo {
      color: white;
      opacity: 1;
    }

    .link {
      width: 50px;
      height: 50px;
      background-color: rgba(255, 182, 72, 0.8);
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      margin: 40px;
    }
  }
`;

function GridTile({ title, link, imgSrc, subtitle }) {
  return (
    <Link to={link}>
      <GridTileStyles>
        <GatsbyImage
          className="background"
          image={imgSrc}
          placeholder="blurred"
          alt="Img"
          layout="fullWidth"
          formats={['auto', 'webp', 'avif']}
        />
        <div className="txt">
          <div>
            <div className="titleWrapper">
              <h3 className="title">{title}</h3>
            </div>
            <p className="shortInfo">{subtitle}</p>
          </div>
          <div className="link">></div>
        </div>
      </GridTileStyles>
    </Link>
  );
}

export default function SectionGrid() {
  const data = useStaticQuery(graphql`
    {
      projects: file(name: { eq: "z1" }) {
        childImageSharp {
          gatsbyImageData(placeholder: TRACED_SVG, formats: [AUTO, WEBP, AVIF])
        }
      }
      rozliczanie: file(name: { eq: "z2" }) {
        childImageSharp {
          gatsbyImageData(placeholder: TRACED_SVG, formats: [AUTO, WEBP, AVIF])
        }
      }
      finances: file(name: { eq: "z3" }) {
        childImageSharp {
          gatsbyImageData(placeholder: TRACED_SVG, formats: [AUTO, WEBP, AVIF])
        }
      }
      services: file(name: { eq: "z4" }) {
        childImageSharp {
          gatsbyImageData(placeholder: TRACED_SVG, formats: [AUTO, WEBP, AVIF])
        }
      }
    }
  `);

  return (
    <SectionGridStyles>
      <BootsContainer>
        <h2 className="leadTxt">
          Od 2002 roku dla naszych Klientów pozyskaliśmy
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
              subtitle="Wykonujemy pełną dokumentację aplikacyjną: wnioski, wybrane załączniki, studia wykonalności, biznes plany"
              link="/oferta#dok"
              imgSrc={data.projects.childImageSharp.gatsbyImageData}
              alt="Img"
            />
          </div>
          <div className="blue">
            <GridTile
              title="Rozliczanie projektów"
              subtitle="Rozliczamy kompleksowo projekty wybrane do dofinansowania. Przygotowujemy wymagane dokumenty, raporty i zestawienia. Monitorujemy zgodność realizacji projektu z dokumentacją. Sporządzamy wnioski o płatności"
              link="/oferta#roz"
              imgSrc={data.rozliczanie.childImageSharp.gatsbyImageData}
              alt="Img"
            />
          </div>
          <div className="yellow">
            <GridTile
              title="Analizy finansowe"
              subtitle="Analizy finansowe do dokumentacji aplikacyjnej: finansowe, ekonomiczne, wrażliwości, ryzyka, przygotowanie aktywnego arkusza MsExcel, zmiany i poprawki na wszystkich etapach oceny"
              link="/oferta#fin"
              imgSrc={data.finances.childImageSharp.gatsbyImageData}
              alt="Img"
            />
          </div>
          <div className="navy">
            <GridTile
              title="Stała obsługa"
              subtitle="Usługa swoim zakresem obejmują wszystko, co istotne dla
              skutecznego korzystania ze środków preferencyjnych. Stała obsługa w oparciu o abonament."
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
