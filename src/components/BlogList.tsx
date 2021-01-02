import React from "react"
import { Link } from "gatsby"
import styles from "./scroll-snap.module.css"

const BlogList: React.FunctionComponent = ({ items }) => {
  const buildList = () => {
    if (!items) {
      return null
    }

    const result = items.map(post => {
      const title = post.frontmatter.title || post.fields.slug

      return (
        <section key={post.fields.slug}>
          <article
            className="post-list-item bg-white dark:bg-gray-700 rounded-tl-xl sm:rounded-t-xl p-4 pb-6 sm:p-8 lg:p-4 lg:pb-6 xl:p-8 space-y-6 sm:space-y-8 lg:space-y-6 xl:space-y-8"
            itemScope
            itemType="http://schema.org/Article"
          >
            <span className="">{post.frontmatter.date}</span>
            <div className="w-3/4">
              <h3 className="">
                <Link to={post.fields.slug} itemProp="url">
                  <span itemProp="headline">{title}</span>
                </Link>
              </h3>
              <p
                dangerouslySetInnerHTML={{
                  __html: post.frontmatter.description || post.excerpt,
                }}
                itemProp="description"
              />
            </div>
          </article>
        </section>
      )
    })

    return <div className="flex">{result}</div>
  }

  return (
    <section
      className={`h-screen pt-20 ${styles.scrollSnapChild}`}
      id="blog-list"
    >
      <h2 className="font-heading font-bold text-4xl mb-10 text-gray-800 dark:text-gray-300">
        Latest from blog
      </h2>
      {buildList()}
    </section>
  )
}

export default BlogList
