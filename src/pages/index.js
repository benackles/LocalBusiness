import * as React from "react"
import { Helmet } from "react-helmet"

// markup
const IndexPage = () => {
  return (
    <>
      <Helmet>
          <meta charSet="utf-8" />
          <title>Local Business: Build Local Business Websites with Gatsby</title>
          <link rel="canonical" href="" />
      </Helmet>
      <h1>Local Business</h1>
      <p>Build mobile-responsive local business websites with Gatsby.js</p>
    </>
  )
}

export default IndexPage