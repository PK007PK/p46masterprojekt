import { graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
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
      font-size: 20px;
      line-height: 43px;
      letter-spacing: 3px;
    }
  }
`;

const heroBottomBar = () => (
  <HeroBottomBarStyles>
    <div className="subtitle"># O nas</div>
  </HeroBottomBarStyles>
);

const AboutUs = ({ data }) => (
  <Layout>
    <SEO />
    {/* <Hero videoSrcURL={data.cloudinaryMedia.url} bottomBar={heroBottomBar} /> */}
    <main />
  </Layout>
);

export const pageQuery = graphql`
  {
    cloudinaryMedia(public_id: { eq: "blurry_cw7p2n" }) {
      url
    }
  }
`;

export default AboutUs;
