import React from "react"
import Header from "./Header"
import Footer from "./Footer"

const Layout = ({ /*location, title, */ children }) => {
  return (
    <React.Fragment>
      <Header />
      <main
        className="flex flex-col justify-center"
        style={{ minHeight: "100vh" }}
      >
        {children}
        <Footer className="mt-auto" />
      </main>
    </React.Fragment>
  )
}

export default Layout
