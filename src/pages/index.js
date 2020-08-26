import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>👋 Hi people</h1>
    <p>Welcome to my new webspace 🕸. Hope you'll like it...😇</p>
    <p>Content coming soon.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/about/">About Me</Link> <br />
    <Link to="/projects/">My Projects</Link>
  </Layout>
)

export default IndexPage