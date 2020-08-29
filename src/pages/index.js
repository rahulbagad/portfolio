import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import About from "../components/about";
import { Divider } from "theme-ui";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <About />
    <Divider />
  </Layout>
);

export default IndexPage;
