import { graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { BootsContainer } from '../components/BootsElements';
import Hero from '../components/Hero';

import Layout from '../components/Layout';
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
    <div className="subtitle"># Kontakt</div>
  </HeroBottomBarStyles>
);

const Kontakt = ({ data }) => (
  <Layout>
    <SEO title="Kontakt" />
    <Hero
      videoSrcURL={data.cloudinaryMedia.secure_url}
      bottomBar={heroBottomBar}
    />
    <main>
      <BootsContainer className="sectionPaddings">
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
    cloudinaryMedia(public_id: { eq: "blurry_cw7p2n" }) {
      secure_url
    }
  }
`;

export default Kontakt;
