import { graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { BootsContainer } from '../components/BootsElements';
import SectionHero from '../components/SectionHero/SectionHero';

import Layout from '../components/Layout/Layout';
import SEO from '../components/SEO';

const HeroBottomBarStyles = styled.div`
  ${({ theme }) => theme.media.mdAbove} {
    display: flex;
    justify-content: space-between;
  }
  .subtitle {
    ${({ theme }) => theme.media.mdAbove} {
      font-size: 40px;
      line-height: 43px;
      letter-spacing: 3px;
    }
  }
`;

const heroBottomBar = () => (
  <HeroBottomBarStyles>
    <h2 className="subtitle"># Kontakt</h2>
  </HeroBottomBarStyles>
);

const Kontakt = ({ data }) => (
  <Layout>
    <SEO title="Kontakt" />
    <SectionHero
      imgSrc={data.image.childImageSharp.gatsbyImageData}
      bottomBar={heroBottomBar}
      secondary
    />
    <main>
      <BootsContainer style={{ marginTop: '60px' }}>
        <h2 id="blog" className="leadTxt">
          Komunikat
        </h2>
        <p>
          Z dniem 31.12.2020 spółka Masterprojekt S.C. została zlikwidowana.
          Wszystkim klientom i partnerom dziękujemy za lata owocnej współpracy.
        </p>
        <p style={{ marginBottom: '100px' }}>
          W przypadku konieczności wprowadzenia poprawek lub uzupełnień do już
          wykonanej dokumentacji prosimy o kontakt na dotychczasowe numery
          telefonów,
        </p>
      </BootsContainer>
    </main>
  </Layout>
);

export const pageQuery = graphql`
  {
    image: file(name: { eq: "contact" }) {
      childImageSharp {
        gatsbyImageData(placeholder: TRACED_SVG, formats: [AUTO, WEBP])
      }
    }
  }
`;

export default Kontakt;
