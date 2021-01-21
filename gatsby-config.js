module.exports = {
  siteMetadata: {
    title: "audio core",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "SHHGV7P1cg5jTqszZvPEHjHfPgE5miDp5B9VhR3WbNE",
        spaceId: "3ihbmrd89k97",
      },
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
