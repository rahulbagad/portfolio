import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import Header from "./header";
import About from "../components/about";
import Skills from "../components/skills";
import Projects from "../components/projects";
import "./layout.css";
import Experience from "./experience";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
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
        }
      }
    }
  `);

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
        <Skills />
        <Projects />
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `} <span>🧡 by Rahul Bagad</span>
        </footer>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
