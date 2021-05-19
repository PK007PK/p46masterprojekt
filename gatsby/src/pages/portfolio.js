import { graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import SectionHero from '../components/SectionHero/SectionHero';
import SectionPortfolio from '../components/SectionPortfolio/SectionPortfolio';
import subsidies from '../assets/data/allConsultingProjects';

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
    <h2 className="subtitle"># Portfolio / Wygrane konkursy</h2>
  </HeroBottomBarStyles>
);

const Portfolio = ({ data }) => (
  <Layout>
    <SEO title="Portfolio" />
    <SectionHero
      imgSrc={data.image.childImageSharp.gatsbyImageData}
      bottomBar={heroBottomBar}
      secondary
    />
    <SectionPortfolio data={subsidies} />
    <main />
  </Layout>
);

export const pageQuery = graphql`
  {
    image: file(name: { eq: "portfolio" }) {
      childImageSharp {
        gatsbyImageData(placeholder: TRACED_SVG, formats: [AUTO, WEBP])
      }
    }
  }
`;

export default Portfolio;
