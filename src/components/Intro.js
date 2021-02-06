import React from "react"
import { Link } from "gatsby"

const Intro = () => {
  return (
    <section className="container mx-auto px-10 flex flex-col justify-center items-start w-full mt-auto">
      <h1 className="font-heading font-bold text-7xl mb-10 text-gray-800 dark:text-gray-300">
        Nikita Makhov
      </h1>
      <p className="font-body text-2xl leading-relaxed text-gray-800 dark:text-gray-500 mb-10">
        I'm front-end engineer in Mail.ru. I create and support media content
        projects, landings and other stuff. Other time I run, swim and play
        video games on PS4 Pro.
      </p>

      <Link
        to="/blog/"
        className="transition duration-500 ease-in-out border-gray-800 dark:border-gray-300 hover:bg-gray-800 dark:hover:bg-gray-300 hover:text-gray-100 dark:hover:text-gray-800 dark:text-gray-300 border-solid border-2 rounded-full py-3 px-6 text-lg"
      >
        Go to blog
      </Link>
    </section>
  )
}

export default Intro
