import React from "react"
import styles from "./scroll-snap.module.css"

const Intro = () => {
  return (
    <section
      className={`flex flex-col justify-center items-start pt-20 mt-10 w-9/12 h-screen ${styles.scrollSnapChild}`}
    >
      <h1 className="font-heading font-bold text-7xl mb-10 text-gray-800 dark:text-gray-300">
        Work for food, code for fun, sleep for life
      </h1>
      <p className="font-body text-2xl leading-relaxed text-gray-800 dark:text-gray-500 mb-10">
        Hey, I'm Nikita Makhov and I'm front-end engineer in Mail.ru. I create
        and support media content projects, landings and other stuff. Other time
        I run, swim and play video games on PS4 Pro.
      </p>

      <a
        href="#blog-list"
        className="transition duration-500 ease-in-out border-gray-800 dark:border-gray-300 hover:bg-gray-800 dark:hover:bg-gray-300 hover:text-gray-100 dark:hover:text-gray-800 dark:text-gray-300 border-solid border-2 rounded-full py-3 px-6 text-lg"
      >
        Go to blog
      </a>
    </section>
  )
}

export default Intro
