import React from "react"
import Header from "./Header"

const Layout = ({ /*location, title, */ children }) => {
  return (
    // <div className="container mx-auto px-20 flex flex-col h-screen justify-between">
    <div className="container mx-auto px-20">
      <Header />
      <main>{children}</main>
      <footer className="py-3">
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
