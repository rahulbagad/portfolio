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
          `Integration of third party APIs in the system, with regular communication with the API vendors.`,
          `Designing and implementing data ingestion and enrichment flows for the data from various data-sources.`,
          `Identifying bottlenecks and optimizing serving time, page load time, database queries.`,
          `Discussing business requirements with stakeholders and translating them into technical requirements.`,
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
    skills: ["Java", "Python", "JavaScript", "PHP", "SpringBoot", "React", "Flask", "MongoDB", "MySQL", "Git", "AWS", "Docker", "Kubernetes" ],
    projects: [
      {
        title: "PuzzlePedia",
        description:"Webapp for Puzzle Lovers to try out new puzzles. At present it has 140+ users and 800+ submissions. Here one can solve, share and practice the puzzles, compete with others and conquer the leaderboard.",
        technologies: ["PHP", "JavaScript", "MySQL", "Bootstrap"],
        link: "https://github.com/rahulbagad"
      },
      {
        title: "Smart Gas Leak Detector",
        description:"IoT based cost effective system which detects LPG/CNG leakage and notifies remote user about leakage. Also alarm is produced. Also the location is shown on google maps.",
        technologies: ["Arduino Programming",  "Google Maps API", "Arduino Uno", "GSM SIM 900A"],
        link: "https://github.com/rahulbagad"
      },
      {
        title: "ClassifyMe",
        description:"News Article Classifier using Naive Bayes Algorithm which classifies given news article to its category. For training purpose used data from BBC news. Got 95% accuracy on testing data.",
        technologies: ["Scikit-Learn", "Ipynb", "Python", "flask"],
        link: "https://github.com/rahulbagad"
      },
      {
        title: "Edu-OLX",
        description:"Educational OLX - An online platform for students of WCE, Sangli wherein they can sell and buy old educational material in one place at affordable prices.",
        technologies: ["PHP", "JavaScript", "MySQL", "Bootstrap"],
        link: "https://github.com/rahulbagad"
      }
    ]
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
        icon: `src/images/prof-dark-bg.jpeg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-theme-ui`,
  ],
};
