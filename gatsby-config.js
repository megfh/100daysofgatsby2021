const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
};

if (process.env.CONTENTFUL_HOST) {
  contentfulConfig.host = process.env.CONTENTFUL_HOST;
}

module.exports = {
  siteMetadata: {
    title: "audio core",
    description: `100 days of Gatsby 2021 Challenge`,
    author: `@megfh`,
    siteUrl: `localhost:XXXX`
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: contentfulConfig
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
