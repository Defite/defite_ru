import * as React from "react"
import * as T from "./BlogCard.types"
import { Link } from "gatsby"
import classNames from "classnames"
import styles from "./BlogCard.module.css"
import colorThemes from "../../themes"

const BlogCard: React.FunctionComponent<T.IBlogCard> = ({
  date,
  excerpt,
  slug,
  title,
  type,
  tags,
  theme = "default",
}) => {
  const isMediaPost = type === "video"

  const articleClass = classNames(
    styles.blogCard,
    "bg-gradient-to-t rounded-lg",
    {
      "p-0 overflow-hidden": isMediaPost,
      [colorThemes.default]: theme === "default" || !theme,
      [colorThemes.indigo]: theme === "indigo",
      [colorThemes.cold]: theme === "cold",
    }
  )

  const renderOverlay = theme === "indigo" || theme === "cold"

  const renderTags = () => {
    if (!tags) {
      return null
    }

    const result = tags.map((tag, index) => {
      return (
        <span
          key={`tag-${index}`}
          className="transition duration-150 ease-in-out text-xs uppercase font-heading font-semibold tracking-widest self-start rounded-full px-2 py-1 dark:text-white hover:bg-white dark:hover:text-gray-500"
        >
          {tag}
        </span>
      )
    })

    return <div className={classNames(styles.blogCardTags, "-ml-2")}>{result}</div>
  }

  const postContent = () => {
    const titleClass = classNames(
      "z-10 font-heading font-bold text-gray-800 dark:text-gray-100",
      {
        "text-4xl lg:text-4xl mb-2 leading-snug": !isMediaPost,
      }
    )
    return (
      <div className="p-10">
        {renderOverlay && <div className="dark:image-overlay" />}
        <h2 className={titleClass}>
          <Link to={slug} itemProp="url" className="transition duration-500 ease-in-out hover:border-b-8">
            <span itemProp="headline">{title}</span>
          </Link>
        </h2>
        {date && (
          <div className="z-10 text-gray-500 dark:text-gray-300 text-base font-heading mb-12">
            {date}
          </div>
        )}
        {renderTags()}
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
      {isMediaPost ? (
        <p
          dangerouslySetInnerHTML={{
            __html: excerpt,
          }}
          itemProp="description"
        />
      ) : (
        postContent()
      )}
    </article>
  )
}

export default BlogCard
