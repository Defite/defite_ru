import React from "react"
import { Link, graphql } from "gatsby"
import classNames from "classnames"
import mediumZoom from "medium-zoom"

import BlogPostMeta from "../components/BlogPostMeta"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "./blog-post.module.css"

const BlogPostTemplate = ({ data, location }) => {
  React.useEffect(() => {
    const zoom = mediumZoom(".gatsby-resp-image-wrapper img")

    return () => {
      zoom.detach()
    }
  }, [])

  const post = data.markdownRemark
  const { title, description, date, tags } = post.frontmatter
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data

  const articleHeadClass = classNames(styles.kgCanvas, "my-20 text-center")

  const articleMainCLass = classNames(
    styles.kgCanvas,
    "max-w-full prose dark:prose-dark"
  )

  const postTags = tags.map((tag, index) => {
    return (
      <span
        key={`post-tag-${index}`}
        className="ml-2 transition duration-150 ease-in-out text-xs uppercase font-heading font-semibold tracking-widest self-start rounded-full px-2 py-1 bg-white hover:bg-gray-600 hover:text-white dark:bg-gray-600 dark:text-white dark:hover:text-gray-500 dark:hover:bg-white"
      >
        {tag}
      </span>
    )
  })

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={title} description={description || post.excerpt} />
      <article
        className="blog-post mb-20"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header className={articleHeadClass}>
          <div className="mb-5 -ml-2">{postTags}</div>
          <h1
            className="font-heading font-bold text-5xl leading-tight text-gray-800 dark:text-gray-100"
            itemProp="headline"
          >
            {title}
          </h1>
          <BlogPostMeta date={date} readingTime={post.fields.readingTime} />
        </header>
        <section
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
          className={articleMainCLass}
        />
      </article>
      <nav className={`blog-post-nav mb-20 ${styles.kgCanvas}`}>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          {previous && (
            <li>
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            </li>
          )}
          {next && (
            <li>
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        theme
        tags
      }
      fields {
        readingTime {
          text
        }
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
