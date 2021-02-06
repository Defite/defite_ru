import React from "react"
import Header from "./Header"
import Footer from "./Footer"

const Layout = ({ /*location, title, */ children }) => {
  return (
    <div className="flex flex-col justify-center" style={{minHeight: '100vh'}}>
      <Header />
      <main className="mt-auto">{children}</main>
      <Footer className="mt-auto" />
    </div>
  )
}

export default Layout
