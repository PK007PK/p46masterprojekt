import { graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Hero from '../components/Hero';
import SectionPortfolio from '../components/SectionPortfolio';
import subsidies from '../assets/data/allConsultingProjects';

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
    <div className="subtitle"># Portfolio</div>
  </HeroBottomBarStyles>
);

const Portfolio = ({ data }) => (
  <Layout>
    <SEO title="Portfolio" />
    <Hero
      videoSrcURL={data.cloudinaryMedia.secure_url}
      bottomBar={heroBottomBar}
      secondary
    />
    <SectionPortfolio data={subsidies} />
    <main />
  </Layout>
);

export const pageQuery = graphql`
  {
    cloudinaryMedia(public_id: { eq: "Back3" }) {
      secure_url
    }
  }
`;

export default Portfolio;
