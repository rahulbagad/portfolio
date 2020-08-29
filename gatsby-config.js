module.exports = {
	siteMetadata: {
		bio: 'Software Developer',
		title: `Rahul Bagad`,
		author: `Rahul Bagad`,
		description: `Personal portfolio of Divyanshu Maithani`,
		siteUrl: `https://rahulbagad.github.io`,
		social: {
			twitter: `https://twitter.com/BagadRahul`,
			github: 'https://github.com/rahulbagad',
			instagram: 'https://www.instagram.com/rahul_bagad',
			email: 'mailto:rahulbagad@hotmail.com',
			stackoverflow: 'https://stackoverflow.com/users/6131082/rahul-bagad',
			linkedin: 'https://www.linkedin.com/in/rahulbagad',
		},
	},
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-theme-ui`
  ],
}
