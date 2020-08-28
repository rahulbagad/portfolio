import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>👋 Hola!</h1>
    <div style={{ maxWidth: `250px`, marginBottom: `1.45rem`}}>
      <Image />
    </div>
    <p>Welcome to my new webspace 🕸 . Hope you'll like it... 😇 </p>
    <p>Let me introduce myself!</p>
    <p>Wait, you already know my name. Let's talk about other things. I'm a Computer science enthusiast and B.Tech Information Technology graduate having 2.5+ years of experience as Software Engineer 👨‍💻 currently working with <a href="https://sahaj.ai" target="_blank">Sahaj</a> as a Polyglot Developer across wide range of technologies following agile and XP practices.</p>
    <p>I'm passionate about programming and delivering, clean, test-covered, well-designed and scalable code. I am interested in Algorithms, Data Structures & Backend systems. And I also like to <a href="https://instagram.com/rahul_bagad" target="_blank" >capture </a>📷 the things around.</p>
  </Layout>
)

export default IndexPage
