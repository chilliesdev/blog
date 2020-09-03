require(`dotenv`).config({
  path: `.env.${process.env.NODE_ENV}`
})

console.log(process.env.CONTENTFUL_SPACE_ID)

module.exports = {
  siteMetadata: {
    title: `blog`,
    description: `A starter kit for TypeScript-based Gatsby projects with sensible defaults.`,
    keywords: `gatsbyjs, gatsby, javascript, sample, something`,
    siteUrl: `https://gatsby-starter-typescript-plus.netlify.com`,
    author: {
      name: `Chill Developer`,
      url: `https://twitter.com/resir014`,
      email: `matthewkayode116@gmail.com`
    }
  },
  plugins: [
    // {
    //   resolve: `gatsby-source-contentful`,
    //   options: {
    //     spaceId: process.env.CONTENTFUL_SPACE_ID,
    //     accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
    //   }
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1rem`
            }
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1140,
              quality: 90,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://gatsby-starter-typescript-plus.netlify.com`
      }
    },
    `gatsby-plugin-emotion`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`
  ]
}
