import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import Header from "./header";
import About from "../components/about";
import Skills from "../components/skills";
import Projects from "../components/projects";
import "./layout.css";
import Experience from "./experience";
import { useColorMode } from "theme-ui";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          skills
          experiences { 
            company
            role
            website
            from
            to
            description
            work
           }
          social {
            github
            linkedin
            instagram
            stackoverflow
            email
            twitter
          }
          projects {
            title
            description
            technologies
            link
          }
        }
      }
    }
  `);
  const [colorMode, _] = useColorMode();

  return (
    <>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <Header siteMetadata={data.site.siteMetadata} />
        <main>{children}</main>
        <About />
        <Experience experiences={data.site.siteMetadata.experiences}/>
        <Skills skills={data.site.siteMetadata.skills}/>
        <Projects projects={data.site.siteMetadata.projects} colorMode={colorMode}/>
        <footer style={{ fontSize: 14, fontWeight: "lighter", textAlign: "center" }}>
          © {new Date().getFullYear()}, Crafted
          {` `}  by Rahul Bagad. Work in progress <span role="img">🚧</span>
        </footer>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
