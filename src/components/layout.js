import React from "react"
import Header from "./Header"

const Layout = ({ /*location, title, */ children }) => {
  return (
    <React.Fragment>
      <Header />
      <div className="container mx-auto px-20">
        <main>{children}</main>
        <footer className="py-3">
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </React.Fragment>
  )
}

export default Layout
