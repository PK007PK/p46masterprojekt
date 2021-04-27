import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const SEO = ({ children, location, title, image }) => {
  const data = useStaticQuery(graphql`
    {
      sanitySiteConfig {
        title
        lang
        description
      }
    }
  `);

  return (
    <Helmet titleTemplate={`%s - ${data.sanitySiteConfig.title}`}>
      <html lang={data.sanitySiteConfig.lang} />
      <title>{title}</title>

      {/* CSS */}
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300&family=Poppins:wght@400;800&display=swap"
        rel="stylesheet"
      />
      {/* Fav Icons */}
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="alternate icon" href="/favicon.ico" />

      {/* Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />
      <meta name="description" content={data.sanitySiteConfig.description} />

      {/* Open Graph */}
      {location && <meta property="og:url" content={location.href} />}
      <meta property="og:image" content={image || '/logo.svg'} />
      <meta property="og:title" content={title} key="ogtitle" />
      <meta
        propery="og:site_name"
        content={data.sanitySiteConfig.title}
        key="ogsitename"
      />
      <meta
        property="og:description"
        content={data.sanitySiteConfig.description}
        key="ogdesc"
      />
      {children}
    </Helmet>
  );
};
export default SEO;
