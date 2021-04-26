import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import styled from 'styled-components';

export default function TagsFilter({ style }) {
  const data = useStaticQuery(graphql`
    query {
      allSanityBlogPostsTags(sort: { order: ASC, fields: name }) {
        nodes {
          name
          slug {
            current
          }
        }
      }
    }
  `);

  const tags = data.allSanityBlogPostsTags.nodes;

  return (
    <div style={style}>
      <h3>Tagi:</h3>
      {tags.map((tag) => (
        <Link
          to={`/${tag.slug.current}/1#blog`}
          activeStyle={{ color: 'red' }}
          key={tag.slug.current}
        >
          #{tag.name}
        </Link>
      ))}
    </div>
  );
}
