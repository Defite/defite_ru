import React from "react"
import Logo from "./Logo"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import DarkIcon from "../assets/inline/dark.svg"
import LightIcon from "../assets/inline/light.svg"

const Header: React.FunctionComponent = () => {
  return (
    <header className="global-header fixed top-0 w-full py-3">
      <div className="container mx-auto px-20 flex content-center items-center">
        <Logo />
        <ThemeToggler>
          {({ theme, toggleTheme }) => {
            // Don't render anything at compile time. Deferring rendering until we
            // know which theme to use on the client avoids incorrect initial
            // state being displayed.
            if (theme == null) {
              return null
            }
            return (
              <label className="cursor-pointer">
                <input
                  className="hidden"
                  type="checkbox"
                  onChange={e =>
                    toggleTheme(e.target.checked ? "dark" : "light")
                  }
                  checked={theme === "dark"}
                />
                {theme === "dark" ? (
                  <DarkIcon className="w-10" />
                ) : (
                  <LightIcon className="w-10" />
                )}
              </label>
            )
          }}
        </ThemeToggler>
      </div>
    </header>
  )
}

export default Header
