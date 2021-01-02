import React from "react"

import BlogCard from "./BlogCard"

const BlogList: React.FunctionComponent = ({ items }) => {
  const buildList = () => {
    if (!items) {
      return null
    }

    const result = items.map(post => {
      const { date, title, type } = post.frontmatter

      return (
        <BlogCard
          date={date}
          slug={post.fields.slug}
          excerpt={post.excerpt}
          title={title}
          type={type}
        />
      )
    })

    return (
      <div className="w-5/6 mx-auto grid grid-cols-2 gap-6 auto-rows-fr">
        {result}
      </div>
    )
  }

  return (
    <section className="pt-20" id="blog-list">
      <h2 className="w-5/6 mx-auto font-heading font-bold text-4xl mb-10 text-gray-800 dark:text-gray-300">
        Blog
      </h2>
      {buildList()}
    </section>
  )
}

export default BlogList
