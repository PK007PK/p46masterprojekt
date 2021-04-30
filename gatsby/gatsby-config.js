import dotenv from 'dotenv';
import projectConfig from './src/projectConfig';

dotenv.config({ path: '.env' });

export default {
  siteMetadata: {
    siteUrl: projectConfig.siteUrl,
  },

  flags: { DEV_SSR: true },
  plugins: [
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    `gatsby-plugin-image`,
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-source-cloudinary`,
      options: {
        cloudName: process.env.CLOUDINARY_CLOUD_NAME,
        apiKey: process.env.CLOUDINARY_API_KEY,
        apiSecret: process.env.CLOUDINARY_API_SECRET,
        resourceType: `video`,
        // type: `type Value`,
        // prefix: `abc-xyz`,
      },
    },
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `10e4smak`,
        token: process.env.SANITY_TOKEN,
        dataset: `production`,
        watchMode: true,
        apiVersion: '2021-04-14',
        graphqlTag: 'default',
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/assets/images/`,
        name: `images`,
      },
      __key: `images`,
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-copy-linked-files`,
        ],
      },
    },
    `gatsby-remark-copy-linked-files`,
    'gatsby-plugin-react-helmet',
    // {
    //   resolve: "gatsby-plugin-manifest",
    //   options: {
    //     icon: "src/images/icon.png",
    //   },
    // },
    // {
    //   resolve: 'gatsby-plugin-google-analytics',
    //   options: {
    //     trackingId: projectConfig.trackingGoogleId,
    //   },
    // },
  ],
};
