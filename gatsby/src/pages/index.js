import { graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import SectionContestWon from '../components/SectionContestWon';
import SectionGrid from '../components/SectionGrid';
import Hero from '../components/Hero';
import SectionLatestNews from '../components/SectionLatestNews';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import SectionAdd from '../components/SectionAdd';
import subsidies from '../assets/data/allConsultingProjects';

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
    <div className="subtitle">Fundusze Strukturalne</div>
    <div className="subtitle">Programy krajowe</div>
    <div className="subtitle">Fundusze EOG / "Norweskie"</div>
  </HeroBottomBarStyles>
);

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Strona główna" />
    <main>
      <Hero
        videoSrcURL={data.cloudinaryMedia.secure_url}
        bottomBar={heroBottomBar}
      />
      <SectionGrid />
      <SectionLatestNews data={data.allSanityBlogPosts.nodes} />
      <SectionContestWon data={subsidies} />
      <SectionAdd />
    </main>
  </Layout>
);

export const pageQuery = graphql`
  query MyQuery {
    cloudinaryMedia(public_id: { eq: "blurry_cw7p2n" }) {
      secure_url
    }
    allSanityBlogPosts(limit: 3, sort: { fields: [date], order: DESC }) {
      nodes {
        name
        lead
        date(formatString: "")
        slug {
          current
        }
        image {
          asset {
            gatsbyImageData(width: 350)
          }
        }
      }
    }
  }
`;

export default IndexPage;
