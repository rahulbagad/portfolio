module.exports = {
  siteMetadata: {
    bio: `Software Developer`,
    title: `Rahul Bagad`,
    author: `Rahul Bagad`,
    description: `Personal portfolio of Rahul Bagad`,
    siteUrl: `https://rahulbagad.github.io`,
    social: {
      twitter: `https://twitter.com/BagadRahul`,
      github: `https://github.com/rahulbagad`,
      instagram: `https://www.instagram.com/rahul_bagad`,
      email: `mailto:rahulbagad@hotmail.com`,
      stackoverflow: `https://stackoverflow.com/users/6131082/rahul-bagad`,
      linkedin: `https://www.linkedin.com/in/rahulbagad`,
    },
    experiences: [
      {
        company: `Sahaj`,
        website: `https://www.sahaj.ai`,
        role: `Solution Consultant`,
        from: `April 2019`,
        to: `Present`,
        description: [
          `Involved in client interactions, designing and developing end to end features.`,
          `Working on building real-time, automated OOH trading platform.`,
        ],
        work: [
          `Programming and delivering clean, test-covered and well-designed code.`,
          `Implementing UI Designs and backend integration.`,
        ],
      },
      {
        company: `GSLab`,
        role: `Software Engineer`,
        website: `https://www.gslab.com`,
        from: `June 2018`,
        to: `April 2019`,
        description: [
          `Involved in designing and developing end to end features.`,
          `Worked on building multicloud management platform.`,
        ],
        work: [
          `Designing, writing and consuming HTTP-REST APIs.`,
          `Research & implementation of PoCs of features for business requirements.`,
        ],
      },
      {
        company: `GSLab`,
        role: `Undergraduate Intern`,
        website: `https://www.gslab.com`,
        from: `Jan 2018`,
        to: `June 2019`,
        description: [
          `Worked on various internal projects.`,
          `Worked on POC for dockerizing OpenStack.`,
        ],
      },
    ],
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
    `gatsby-plugin-theme-ui`,
  ],
};
