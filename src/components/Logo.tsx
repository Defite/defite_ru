import React from "react"
import { Link } from "gatsby"

const Logo: React.FunctionComponent = () => {
  return (
    <Link
      className="w-full no-underline font-heading text-4xl font-black text-gray-800 dark:text-gray-300"
      to="/"
    >
      D<span className="text-logo-pink-dot">.</span>
    </Link>
  )
}

export default Logo
