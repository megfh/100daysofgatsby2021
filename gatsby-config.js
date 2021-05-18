// Initialize dotenv
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`, 
});

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
};

if (process.env.CONTENTFUL_HOST) {
  contentfulConfig.host = process.env.CONTENTFUL_HOST;
}

module.exports = {
  siteMetadata: {
    title: "audioC0RE",
    titleTemplate: "%s · The Headphone Sharing Solution",
    description: `100 days of Gatsby 2021 Challenge`,
    author: `@megfh`,
    siteUrl: `https://100daysofgatsby2021main.gtsb.io`, 
    image: `/images/headphones.jpg`, 
    twitterUsername: "@meghannon4",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: contentfulConfig
    },
    {
      resolve: "gatsby-source-wordpress", 
      options: {
        url: process.env.WPGRAPHQL_URL, 
        schema: {
          perPage: 10, 
          timeout: 60000, 
          requestConcurrency: 5, 
          previewRequestConcurrency: 2, 
        }, 
        develop: {
          hardCacheMediaFiles: true,
          hardCacheData: true,
        },
      }
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-sharp",
    "gatsby-image",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    "@chakra-ui/gatsby-plugin", 
    {
      resolve: `gatsby-source-formium`,
      options: {
        // Get your projectId from https://dashboard.formium.io
        projectId: process.env.GATSBY_FORMIUM_PROJECTID,
        // Generate a personal access token by going to https://dashboard.formium.io/account#tokens
        accessToken: process.env.FORMIUM_TOKEN,
      },
    }, 
    {
      resolve: "gatsby-source-shopify",
      options: {
        apiKey: process.env.SHOPIFY_ADMIN_API_KEY,
        password: process.env.SHOPIFY_ADMIN_PASSWORD,
        storeUrl: process.env.SHOPIFY_STORE_URL,
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-preact",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/images/icon.png`
      },
    },
    "gatsby-plugin-offline", 
    {
      resolve: "gatsby-plugin-webpack-bundle-analyser-v2",
      options: {
        devMode: true,
      },
    }
  ],
};
