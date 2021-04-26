import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

export default function CategoryFilter({ style }) {
  const data = useStaticQuery(graphql`
    {
      allSanityBlogPostsCategories(sort: { order: ASC, fields: name }) {
        nodes {
          name
          slug {
            current
          }
        }
      }
    }
  `);

  const categories = data.allSanityBlogPostsCategories.nodes;

  return (
    <div style={{ marginBottom: '30px' }}>
      <h3>Kategorie:</h3>
      <Link to="/blog/1#blog" activeStyle={{ color: 'red' }}>
        <span className="name">Wszystkie kategorie</span>
      </Link>
      <br />
      {categories.map((category) => (
        <Link
          to={`/${category.slug.current}/1#blog`}
          activeStyle={{ color: 'red' }}
          key={category.slug.current}
          style={{ marginRight: '10px' }}
        >
          {category.name}
        </Link>
      ))}
    </div>
  );
}
