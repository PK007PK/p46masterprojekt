import { graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import {
  BootsColumn,
  BootsContainer,
  BootsRow,
} from '../components/BootsElements';
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
    <h2 className="subtitle" style={{ marginTop: '0' }}>
      # Kontakt
    </h2>
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
        <BootsRow>
          <BootsColumn md="6">
            <p>
              Z dniem 31.12.2020 spółka Masterprojekt S.C. została zlikwidowana.
              Wszystkim klientom i partnerom dziękujemy za lata owocnej
              współpracy.
            </p>
            <p style={{ marginBottom: '100px' }}>
              W przypadku konieczności wprowadzenia poprawek lub uzupełnień do
              już wykonanej dokumentacji prosimy o kontakt na dotychczasowe
              numery telefonów,
            </p>
          </BootsColumn>
          <BootsColumn md="6">
            <form
              name="contact v1"
              method="post"
              data-netlify="true"
              onSubmit="submit"
            >
              <input type="hidden" name="form-name" value="contact v1" />
              <div>
                <label htmlFor="first-name">
                  First name:
                  <br /> <input type="text" name="first-name" />
                </label>
              </div>
              <div>
                <label htmlFor="email">
                  Email:
                  <br /> <input type="email" name="email" />
                </label>
              </div>
              <div>
                <label htmlFor="message">
                  Text:
                  <br /> <textarea type="email" name="message" />
                </label>
              </div>
              <button type="submit">submit</button>
            </form>
          </BootsColumn>
        </BootsRow>
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
