import React from "react"

import BlogCard from "./BlogCard"

const BlogList: React.FunctionComponent = ({ items }) => {
  const buildList = () => {
    if (!items) {
      return null
    }

    const result = items.map(post => {
      const { date, title, type, tags, theme } = post.frontmatter
      const isMediaPost = type === "video"

      return (
        <div className={isMediaPost ? "flex-66 md:flex-100" : "flex-33"}>
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

    return (
      <div className="w-full flex -ml-4 flex-wrap flex-row">{result}</div>
    )
  }

  return (
    <section className="container mx-auto md:px-4 lg:px-5 xl:px-10 pt-20 mb-20" id="blog-list">
      <div className="w-full mb-10 text-center">
        <h2 className="font-heading font-bold text-5xl text-gray-800 dark:text-gray-300">
          Blog
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mt-4">
          Place for my personal thoughts and code related articles
        </p>
      </div>
      {buildList()}
    </section>
  )
}

export default BlogList
