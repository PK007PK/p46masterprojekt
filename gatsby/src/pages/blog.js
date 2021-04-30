import React from 'react';
import { graphql, Link } from 'gatsby';

import styled from 'styled-components';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import CategoryFilter from '../components/CategoryFilter';
import TagsFilter from '../components/TagsFilter';
import Pagination from '../components/Pagination';
import {
  BootsColumn,
  BootsContainer,
  BootsRow,
} from '../components/BootsElements';
import projectConfig from '../projectConfig';
import CardSimple from '../components/CardSimple';

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
    <div className="subtitle"># Blog</div>
  </HeroBottomBarStyles>
);

const BlogPage = ({ data, pageContext }) => {
  if (pageContext.dirName === undefined) {
    pageContext.dirName = `/blog`;
  }
  const categories = data.category;
  const tags = data.tag;
  const { allPosts } = data;

  let postsToDisplay;
  switch (pageContext.pageType) {
    case 'allPaginatedPosts':
      postsToDisplay = allPosts;
      break;
    case 'allPostsInCategory':
      postsToDisplay = categories;
      break;
    case 'allPostsInTag':
      postsToDisplay = tags;
      break;
    default:
      postsToDisplay = allPosts;
  }

  const DisplayPosts = () => (
    <ul style={{ listStyle: `none`, paddingLeft: 0 }}>
      {postsToDisplay.nodes
        .filter((post) => post.date !== null)
        .map((post) => (
          <li key={post.slug.current}>
            <CardSimple
              title={post.name}
              subtitle={post.lead}
              date={post.date}
              lead={post.lead}
              link={`/${post.slug.current}`}
              style={{ marginBottom: '20px' }}
              imgSrc={post.image?.asset?.gatsbyImageData}
            />
          </li>
        ))}
    </ul>
  );

  return (
    <Layout>
      <SEO
        title={`Blog page ${
          pageContext.sellectionName ? `| ${pageContext.sellectionName}` : ''
        } ${pageContext.currentPage ? `| ${pageContext.currentPage}` : ''}`}
      />
      <Hero
        videoSrcURL={data.cloudinaryMedia.secure_url}
        bottomBar={heroBottomBar}
      />
      <BootsContainer className="sectionPaddings">
        <BootsRow>
          <BootsColumn md={10} lg={9}>
            <h2 id="blog" className="leadTxt">
              Informacje
            </h2>
          </BootsColumn>
        </BootsRow>
        <BootsRow>
          <BootsColumn md={10} lg={9}>
            <DisplayPosts />
          </BootsColumn>
          <BootsColumn md={2} lg={3}>
            <CategoryFilter />
            <TagsFilter />
          </BootsColumn>
        </BootsRow>
        <Pagination
          pageSize={projectConfig.pagesAmountInSet}
          totalCount={postsToDisplay.totalCount}
          currentPage={pageContext.currentPage || 1}
          skip={pageContext.skip}
          base={pageContext.dirName}
        />
      </BootsContainer>
    </Layout>
  );
};

export const pageQuery = graphql`
  query pagesQuery($selectionName: String, $skip: Int = 0, $pageSize: Int) {
    site {
      siteMetadata {
        title
      }
    }
    cloudinaryMedia(public_id: { eq: "Back3" }) {
      secure_url
    }
    category: allSanityBlogPosts(
      limit: $pageSize
      skip: $skip
      sort: { order: DESC, fields: date }
      filter: { categories: { elemMatch: { name: { eq: $selectionName } } } }
    ) {
      totalCount
      nodes {
        slug {
          current
        }
        date
        name
        lead
      }
    }
    tag: allSanityBlogPosts(
      limit: $pageSize
      skip: $skip
      sort: { order: DESC, fields: date }
      filter: { tags: { elemMatch: { name: { eq: $selectionName } } } }
    ) {
      totalCount
      nodes {
        slug {
          current
        }
        date
        name
        lead
      }
    }
    allPosts: allSanityBlogPosts(
      limit: $pageSize
      skip: $skip
      sort: { order: DESC, fields: date }
    ) {
      totalCount
      nodes {
        slug {
          current
        }
        date
        name
        lead
        image {
          asset {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

export default BlogPage;
