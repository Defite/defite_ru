import React from "react"
import { Link } from "gatsby"

import BlogCard from "../BlogCard"
import styles from "./BlogList.module.css"

const BlogList: React.FunctionComponent = ({ items }) => {
  const buildTiles = () => {
    if (!items) {
      return null
    }

    const result = items.map(post => {
      const { date, title, type, tags, theme } = post.frontmatter
      const isMediaPost = type === "video"

      return (
        <div className={isMediaPost ? "flex-100 lg:flex-66" : "flex-100 lg:flex-33 lg:last:flex-grow-0 xl:last:flex-grow-0"}>
          <BlogCard
            key={`blog-post-${post.fields.slug}`}
            date={date}
            slug={post.fields.slug}
            excerpt={post.excerpt}
            title={title}
            type={type}
            tags={tags}
            theme={theme}
          />
        </div>
      )
    })

    return <div className="w-full flex flex-wrap flex-row">{result}</div>
  }

  const buildList = () => {
    const tiles = items.map((item, index) => {
      const { date, title, type, tags, theme } = item.frontmatter

      return (
        <li className="mb-5">
          <article className="flex w-full justify-between">
            <Link to={item.fields.slug} className="font-body font-bold text-xl">{title}</Link>
            <time className="text-gray-500 dark:text-gray-400" dateTime={date}>{date}</time>
          </article>
        </li>
      )
    })

    return <ol className={styles.kgCanvas}>{tiles}</ol>
  }

  return (
    <section
      className="container mx-auto md:px-4 lg:px-5 xl:px-10 pt-20 mb-20"
      id="blog-list"
    >
      <div className="w-full mb-10 text-center">
        <h2 className="font-heading font-bold text-5xl text-gray-800 dark:text-gray-300">
          Blog
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mt-4">
          Place for my personal thoughts and code related articles
        </p>
      </div>
      {buildTiles()}
      {/* {buildList()} */}
    </section>
  )
}

export default BlogList
