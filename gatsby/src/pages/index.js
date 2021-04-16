import { graphql } from 'gatsby';
import React from 'react';
import GridSection from '../components/GridSection';
import Hero from '../components/Hero';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import TxtSection from '../components/TxtSection';

const IndexPage = ({ data }) => (
  // const content = data.markdownRemark;

  <Layout>
    <SEO />
    <main>
      <Hero videoSrcURL={data.cloudinaryMedia.url} />
      <TxtSection />
      <GridSection />
    </main>
  </Layout>
);

export const pageQuery = graphql`
  query MyQuery {
    cloudinaryMedia(public_id: { eq: "video2_h1olp4" }) {
      url
    }
  }
`;

export default IndexPage;
