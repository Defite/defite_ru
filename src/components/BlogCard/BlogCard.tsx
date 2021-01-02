import * as React from "react"
import * as T from "./BlogCard.types"
import { Link } from "gatsby"
import classNames from "classnames"

const BlogCard: React.FunctionComponent<T.IBlogCard> = ({
  date,
  excerpt,
  slug,
  title,
  type,
}) => {
  const isMediaPost = type === "video"

  const articleClass = classNames(
    "flex flex-col bg-white dark:bg-gray-700 rounded-lg justify-end",
    {
      "p-0 overflow-hidden flex-col-reverse": isMediaPost,
    }
  )

  const postContent = () => {
    const titleClass = classNames(
      "font-heading font-semibold text-xl text-gray-800 dark:text-gray-100",
      {
        "text-2xl mb-2": !isMediaPost,
      }
    )
    return (
      <div className="p-5 flex flex-col justify-between h-4/6">
        <h2 className={titleClass}>
          <Link to={slug} itemProp="url">
            <span itemProp="headline">{title}</span>
          </Link>
        </h2>
        {!isMediaPost && (
          <p
            className="text-sm mb-auto text-gray-500 dark:text-gray-300"
            dangerouslySetInnerHTML={{
              __html: excerpt,
            }}
            itemProp="description"
          />
        )}
        {date && (
          <div className="text-gray-500 dark:text-gray-300 text-sm font-heading mt-4">
            {date}
          </div>
        )}
      </div>
    )
  }

  return (
    <article
      key={slug}
      className={articleClass}
      itemScope
      itemType="http://schema.org/Article"
    >
      {postContent()}
      {isMediaPost && (
        <p
          dangerouslySetInnerHTML={{
            __html: excerpt,
          }}
          itemProp="description"
        />
      )}
    </article>
  )
}

export default BlogCard
