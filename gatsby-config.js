module.exports = {
  siteMetadata: {
    title: `Developer Life`,
    description: `개발자로서 배움을 기록하는 습관`,
    author: `@ParkChaeYeon`,
    siteUrl: 'https://my-website-link.com',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `contents`,
        path: `${__dirname}/contents`,
      },
    },
      {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: ['auto', 'webp'],
          quality: 100,
          placeholder: 'blurred'
        }
      }
    },
    `gatsby-plugin-emotion`,
    `gatsby-plugin-image`,
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-smartypants',
            options: {
              dashes: 'oldschool',
            }
          },
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: 'language-',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 768,
              quality: 100,
              withWebp: true,
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {},
          },
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'nofollow',
            },
          },
          {
            resolve: 'gatsby-plugin-canonical-urls',
            options: {
              siteUrl: 'https://my-website.com',
              stripQueryString: true,
            }
          },
          'gatsby-plugin-sitemap',
          {
            resolve: 'gatsby-plugin-robots-txt',
            options: {
              policy: [{userAgent: '*', allow: '/'}]
            }
          }
        ]
      }
    }
  ],
}
