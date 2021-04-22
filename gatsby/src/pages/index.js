import { graphql } from 'gatsby';
import React from 'react';
import SectionContestWon from '../components/SectionContestWon';
import SectionGrid from '../components/SectionGrid';
import Hero from '../components/Hero';
import SectionLatestNews from '../components/SectionLatestNews';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import SectionAdd from '../components/SectionAdd';

const IndexPage = ({ data }) => (
  <Layout>
    <SEO />
    <main>
      <Hero videoSrcURL={data.cloudinaryMedia.url} />
      {/* <SectionGrid /> */}
      {/* <SectionLatestNews /> */}
      {/* <SectionContestWon /> */}
      {/* <SectionAdd /> */}
    </main>
  </Layout>
);

export const pageQuery = graphql`
  query MyQuery {
    cloudinaryMedia(public_id: { eq: "blurry_cw7p2n" }) {
      url
    }
  }
`;

export default IndexPage;
