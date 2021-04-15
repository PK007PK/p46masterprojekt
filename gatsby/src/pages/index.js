import { graphql } from 'gatsby';
import React from 'react';
import Hero from '../components/Hero';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

const IndexPage = ({ data }) => (
  // const content = data.markdownRemark;

  <Layout>
    {/* <SEO
        title={content.frontmatter.title}
        description={content.frontmatter.description || content.excerpt}
      /> */}
    <main>
      <header>
        {/* <h1>{content.frontmatter.title}</h1>
          <p>{content.frontmatter.description}</p> */}
      </header>
      <Hero />
    </main>
  </Layout>
);
// export const pageQuery = graphql`
//   query PageBySlug {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     markdownRemark(frontmatter: { slug: { eq: "gatsby-starter" } }) {
//       excerpt(pruneLength: 160)
//       html
//       frontmatter {
//         description
//         title
//       }
//     }
//   }
// `;

export default IndexPage;
