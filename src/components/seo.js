import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ title, description, image, article }) => {
  const { pathname } = useLocation()
  const { site } = useStaticQuery(query)

  const {
    defaultTitle,
    titleTemplate,
    defaultDescription,
    siteUrl,
    defaultImage,
    twitterUsername,
  } = site.siteMetadata

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname}`,
  }

  return (
    <Helmet title={seo.title} titleTemplate={titleTemplate}>
      <html lang="en-US" />
      <link rel="alternate" href={seo.url} hreflang="en-us" />
      <link rel="alternate" href={seo.url} hreflang="en" />
      <link rel="alternate" href={seo.url} hreflang="x-default" />
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1"
      />
      {seo.url && <meta property="og:url" content={seo.url} />}

      {(article ? true : null) && <meta property="og:type" content="article" />}

      {seo.title && <meta property="og:title" content={seo.title} />}

      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}

      {seo.image && <meta property="og:image" content={seo.image} />}

      <meta name="twitter:card" content="summary_large_image" />

      {twitterUsername && (
        <meta name="twitter:creator" content={twitterUsername} />
      )}

      {seo.title && <meta name="twitter:title" content={seo.title} />}

      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}

      {seo.image && <meta name="twitter:image" content={seo.image} />}
      <link rel="manifest" href="https://hzempire.github.io/images/manifest.json?v=M44lzPylqQ" />
      <link rel="mask-icon" href="https://hzempire.github.io/images/safari-pinned-tab.svg?v=M44lzPylqQ" color="#5bbad5" />
      <link rel="shortcut icon" type="image/png" href="https://hzempire.github.io/images/favicon-32x32.png?v=M44lzPylqQ" />
      <link rel="shortcut icon" type="image/png" href="https://hzempire.github.io/images/favicon-16x16.png?v=M44lzPylqQ" />
      <link rel="shortcut icon" href="https://hzempire.github.io/images/favicon.ico?v=M44lzPylqQ" type="image/x-icon" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="msapplication-TileImage" content="https://hzempire.github.io/images/site-144x144.png?v=M44lzPylqQ"/>
      <meta name="msapplication-config" content="https://hzempire.github.io/images/browserconfig.xml?v=M44lzPylqQ"/> 
    </Helmet>
  )
}

export default SEO

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  article: PropTypes.bool,
}

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  article: false,
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl: siteUrl
        defaultImage: image
        twitterUsername
      }
    }
  }
`
