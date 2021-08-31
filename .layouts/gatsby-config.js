const siteMetadata = {
  title: "Gatsby Theme Primer Wiki",
  shortName: "Wiki",
  description: "A Gatsby foam template for creating Primer wiki sites",
  siteUrl: "https://foam.demo.owenyoung.com",
};
module.exports = {
  siteMetadata,
  flags: {
    DEV_SSR: true,
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: `${__dirname}/..`,
        ignore: [`**/\.*/**/*`]
      },
    },
    {
      resolve: "gatsby-theme-primer-wiki",
      options: {
        nav:[
          {
            title:"Github",
            url:"https://github.com/theowenyoung/foam-template-gatsby-theme-primer-wiki/"
          }
        ],
        editUrl:
          "https://github.com/theowenyoung/foam-template-gatsby-theme-primer-wiki/tree/main/",
      },
    },
  ],
};
