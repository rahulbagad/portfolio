import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import About from "../components/about";
import { Divider } from "theme-ui";
import Skills from "../components/skills";
import Projects from "../components/projects";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <About />
    <Skills />
    <Projects />
  </Layout>
);

export default IndexPage;
