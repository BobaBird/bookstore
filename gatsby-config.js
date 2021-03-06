module.exports = {
  siteMetadata: {
    title: 'Best Bookstore Evah',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-emotion',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-snipcart',
      options: {
        apiKey: 'ZWFhMzIyOGUtOTQwMC00YjdiLThlODItM2QyNDU1N2ZkNGFiNjM2NzM4NjIxODY1NDgxNjc0',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'img',
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'best-bookstore-evah',
        short_name: 'Bookstore',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#4d4d4d',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
};
