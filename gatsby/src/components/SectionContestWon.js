import { useStaticQuery, graphql, Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import CardGrant from './CardGrant';

import { BootsContainer } from './BootsElements';

const GridSectionStyles = styled.section`
  padding: var(--sectionPadding);
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .wrapper {
    margin-top: 50px;
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

export default function SectionContestWon() {
  const data = useStaticQuery(graphql`
    {
      pict1: file(name: { eq: "img1" }) {
        childImageSharp {
          gatsbyImageData(placeholder: TRACED_SVG, formats: [AUTO, WEBP, AVIF])
        }
      }
      pict2: file(name: { eq: "img2" }) {
        childImageSharp {
          gatsbyImageData(placeholder: TRACED_SVG, formats: [AUTO, WEBP, AVIF])
        }
      }
      pict3: file(name: { eq: "img3" }) {
        childImageSharp {
          gatsbyImageData(placeholder: TRACED_SVG, formats: [AUTO, WEBP, AVIF])
        }
      }
      pict4: file(name: { eq: "img4" }) {
        childImageSharp {
          gatsbyImageData(placeholder: TRACED_SVG, formats: [AUTO, WEBP, AVIF])
        }
      }
      pict5: file(name: { eq: "img5" }) {
        childImageSharp {
          gatsbyImageData(placeholder: TRACED_SVG, formats: [AUTO, WEBP, AVIF])
        }
      }
      pict6: file(name: { eq: "img6" }) {
        childImageSharp {
          gatsbyImageData(placeholder: TRACED_SVG, formats: [AUTO, WEBP, AVIF])
        }
      }
      pict7: file(name: { eq: "img7" }) {
        childImageSharp {
          gatsbyImageData(placeholder: TRACED_SVG, formats: [AUTO, WEBP, AVIF])
        }
      }
      pict8: file(name: { eq: "img8" }) {
        childImageSharp {
          gatsbyImageData(placeholder: TRACED_SVG, formats: [AUTO, WEBP, AVIF])
        }
      }
      pict9: file(name: { eq: "img9" }) {
        childImageSharp {
          gatsbyImageData(placeholder: TRACED_SVG, formats: [AUTO, WEBP, AVIF])
        }
      }
    }
  `);

  return (
    <GridSectionStyles>
      <h2 className="leadTxt">Wygrane konkursy</h2>
      <BootsContainer className="wrapper">
        <div className="grid">
          <CardGrant
            title="Poprawa wskaźnika zdrowych urodzeń oraz ograniczenie negatywnych skutków wielochorobowości wieku dojrzałego i starszego poprzez unowocześnienie zaplecza diagnostyczno-leczniczego w Szpitalu Zakonu Bonifratrów w Katowicach sp. z o.o."
            company="Szpital Zakonu Bonifratrów w Katowicach sp. z o.o."
            grant="1 000 000 zł"
            imgSrc={data.pict1.childImageSharp.gatsbyImageData}
            alt="Img"
          />
          <CardGrant
            title="Poprawa wskaźnika zdrowych urodzeń oraz ograniczenie negatywnych skutków wielochorobowości wieku dojrzałego i starszego poprzez unowocześnienie zaplecza diagnostyczno-leczniczego w Szpitalu Zakonu Bonifratrów w Katowicach sp. z o.o."
            company="Szpital Zakonu Bonifratrów w Katowicach sp. z o.o."
            grant="1 000 000 zł"
            imgSrc={data.pict2.childImageSharp.gatsbyImageData}
            alt="Img"
          />
          <CardGrant
            title="Poprawa wskaźnika zdrowych urodzeń oraz ograniczenie negatywnych skutków wielochorobowości wieku dojrzałego i starszego poprzez unowocześnienie zaplecza diagnostyczno-leczniczego w Szpitalu Zakonu Bonifratrów w Katowicach sp. z o.o."
            company="Szpital Zakonu Bonifratrów w Katowicach sp. z o.o."
            grant="1 000 000 zł"
            imgSrc={data.pict3.childImageSharp.gatsbyImageData}
            alt="Img"
          />
          <CardGrant
            title="Poprawa wskaźnika zdrowych urodzeń oraz ograniczenie negatywnych skutków wielochorobowości wieku dojrzałego i starszego poprzez unowocześnienie zaplecza diagnostyczno-leczniczego w Szpitalu Zakonu Bonifratrów w Katowicach sp. z o.o."
            company="Szpital Zakonu Bonifratrów w Katowicach sp. z o.o."
            grant="1 000 000 zł"
            imgSrc={data.pict4.childImageSharp.gatsbyImageData}
            alt="Img"
          />
        </div>
        <div className="readMoreWrapper">
          <Link to="ddd">Zobacz wszystkie wygrane konkursy</Link>
        </div>
      </BootsContainer>
    </GridSectionStyles>
  );
}
