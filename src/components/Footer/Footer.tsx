import * as React from "react"
import * as T from "./Footer.types"
import classNames from "classnames"
import FacebookIcon from "../../assets/inline/facebook.svg"
import GithubIcon from "../../assets/inline/github.svg"
import InstagramIcon from "../../assets/inline/instagram.svg"
import TwitterIcon from "../../assets/inline/twitter.svg"
import LastFmIcon from "../../assets/inline/lastfm.svg"

const Footer: React.FunctionComponent<T.IFooterProps> = ({ className }) => {
  const footerClass = classNames("py-3", className)

  return (
    <footer className={footerClass}>
      <div className="flex flex-row justify-center mb-8">
        <FacebookIcon width="24" className="mx-4" />
        <GithubIcon width="24" className="mx-4" />
        <InstagramIcon width="24" className="mx-4" />
        <TwitterIcon width="24" className="mx-4" />
        <LastFmIcon width="24" className="mx-4" />
      </div>
      <div className="text-center">
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </div>
    </footer>
  )
}

export default Footer
