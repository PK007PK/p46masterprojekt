import React from 'react';
import { Link, graphql } from 'gatsby';
import BlockContent from '@sanity/block-content-to-react';
import styled from 'styled-components';
import Hero from '../components/Hero';
import Layout from '../components/Layout';

import SEO from '../components/SEO';
import { BootsContainer } from '../components/BootsElements';

const BlogPostTemplate = ({ data }) => {
  const post = data.sanityBlogPosts;
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const { previous, next } = data;

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

    .data {
      min-width: 100px;
    }
  `;

  const heroBottomBar = () => (
    <HeroBottomBarStyles>
      <div className="subtitle">{post.name}</div>
      <div className="data">{post.date}</div>
    </HeroBottomBarStyles>
  );

  return (
    <Layout>
      <SEO title={post.name} description={post.lead} />
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <Hero
          videoSrcURL={data.cloudinaryMedia.secure_url}
          bottomBar={heroBottomBar}
          secondary
        />
        <BootsContainer className="sectionPaddings" style={{ padding: '10px' }}>
          <BlockContent
            blocks={post._rawRichText}
            dataset="production"
            url=""
            projectId="10e4smak"
          />
          <hr />
        </BootsContainer>
      </article>
      <BootsContainer>
        <nav className="blog-post-nav">
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <Link to={`/${previous.slug.current}`} rel="prev">
                  ← {previous.name}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={`/${next.slug.current}`} rel="next">
                  {next.name} →
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </BootsContainer>
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    cloudinaryMedia(public_id: { eq: "Back3" }) {
      secure_url
    }
    site {
      siteMetadata {
        title
      }
    }
    sanityBlogPosts(id: { eq: $id }) {
      id
      date
      name
      _rawRichText
    }
    previous: sanityBlogPosts(id: { eq: $previousPostId }) {
      slug {
        current
      }
      name
    }
    next: sanityBlogPosts(id: { eq: $nextPostId }) {
      slug {
        current
      }
      name
    }
  }
`;
