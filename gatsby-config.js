module.exports = {
  siteMetadata: {
    title: "Defite",
    author: {
      name: "Nikita Makhov",
      summary: "frontend engineer from Russia, Moscow, work in Mail.ru",
    },
    description: "Personal tumblr blog",
    siteUrl: "https://defite.ru",
    social: {
      twitter: "life_maniac",
    },
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/blog`,
        name: "blog",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/assets`,
        name: "assets",
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        excerpt_separator: `<!-- endexcerpt -->`,
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 630,
              showCaptions: true,
            },
          },
          {
            resolve: "gatsby-remark-responsive-iframe",
          },
          "gatsby-remark-prismjs",
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-smartypants",
        ],
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        //trackingId: "ADD YOUR TRACKING ID HERE",
      },
    },
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: ["source sans pro:400,600,700,900", "open sans:400"],
        display: "swap",
      },
    },
    "gatsby-plugin-feed",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Gatsby Starter Blog",
        short_name: "GatsbyJS",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: "content/assets/gatsby-icon.png",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-postcss",
    "gatsby-plugin-dark-mode",
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        include: /assets\/inline/,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // "gatsby-plugin-offline",
  ],
}
