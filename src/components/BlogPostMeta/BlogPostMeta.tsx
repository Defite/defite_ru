import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import * as T from "./BlogPostMeta.types"

const BlogPostMeta: React.FunctionComponent<T.BlogPostMeta> = ({
  date,
  readingTime,
}) => {
  const data = useStaticQuery(graphql`
    query PostMetaQuery {
      avatar: file(absolutePath: { regex: "/avatar.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50, quality: 95) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
        }
      }
    }
  `)

  const { author } = data.site.siteMetadata
  const avatar = data?.avatar?.childImageSharp?.fixed

  return (
    <div className="bio flex mt-5 items-center justify-center">
      {avatar && (
        <Image
          fixed={avatar}
          alt={author?.name || ``}
          className="bio-avatar rounded-full flex-none mr-4"
        />
      )}
      <div className="flex flex-col">
        {author?.name && (
          <span className="text-gray-800 dark:text-gray-100">
            Written by&nbsp;
            <span className="font-heading font-semibold text-lg">
              {author.name}
            </span>
          </span>
        )}
        <div className="text-gray-500 dark:text-gray-400">
          {date}
          <span> · {readingTime.text}</span>
        </div>
      </div>
    </div>
  )
}

export default BlogPostMeta
