import React from 'react'
import { NavLink } from 'react-router-dom'

const Portfolio = () => {
  return (
    <div>
      
      <div className="container py-16 md:py-20" id="portfolio">
          <h2
            className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl"
          >
            Check out my Portfolio
          </h2>
          <h3
            className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl"
          >
            Here's what I have done with the past
          </h3>

          <div
            className="mx-auto grid w-full grid-cols-1 gap-8 pt-12 sm:w-3/4 md:gap-10 lg:w-full lg:grid-cols-2"
          >
            <NavLink
              to="https://galileo-store.netlify.app/"
              target="_blank"
              className="mx-auto transform transition-all hover:scale-105 md:mx-0"
            >
              <img
                src="/assets/img/project-1.png"
                className="w-full shadow"
                alt="portfolio image"
              />
            </NavLink>
            <NavLink
              to="https://utility-texts.netlify.app/"
              target="_blank"
              className="mx-auto transform transition-all hover:scale-105 md:mx-0"
            >
              <img
                src="/assets/img/project-4.png"
                className="w-full shadow"
                alt="portfolio image"
              />
            </NavLink>
            <NavLink
              to="https://course-seller-frontend.netlify.app/"
              target="_blank"
              className="mx-auto transform transition-all hover:scale-105 md:mx-0"
            >
              <img
                src="/assets/img/project-2.png"
                className="w-full shadow"
                alt="portfolio image"
              />
            </NavLink>
            <NavLink
              to="https://random-gif-generator-v2.netlify.app/"
              target="_blank"
              className="mx-auto transform transition-all hover:scale-105 md:mx-0"
            >
              <img
                src="/assets/img/project-3.png"
                className="w-full shadow"
                alt="portfolio image"
              />
            </NavLink>
          </div>
        </div>

    </div>
  )
}

export default Portfolio
