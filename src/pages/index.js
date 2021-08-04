import * as React from "react"
import { Helmet } from "react-helmet"

// markup
const IndexPage = () => {
  return (
    <>
      <Helmet>
        <html lang="en">
          <meta charSet="utf-8" />
          <title>Local Business: Build Local Business Websites with Gatsby</title>
          <meta name="description" content="Build your small business on a solid foundation of mobile-friendliness, performance, accessibility, SEO and structured data types."></meta>
          <link rel="canonical" href="" />
      </Helmet>
      <h1>Local Business</h1>
      <p>Build mobile-responsive local business websites with Gatsby.js</p>
      </html>
    </>
  )
}

export default IndexPage