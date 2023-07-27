import React from 'react'
import { useState } from 'react'
import Logo from "../assets/img/programmer.png"

const NavbarHome = () => {

  const [mobileMenu, setMobileMenu] = useState(false)

  return (
    <div>

      {/* Display Menu */}
      <div className=" top-0  w-full z-50  py-3 sm:py-5 absolute ">
        <div className="container flex items-center justify-between">
          <div>
            <a href="/">
              {/* <img src={Logo} className="w-20 lg:w-20 h-20" alt="logo image"  /> */}
              <h3 className='text-white text-3xl'>𝕄𝕐_ℙ𝕆ℝ𝕋𝔽𝕆𝕃𝕀𝕆</h3>
            </a>
          </div>
          <div className="hidden lg:block">
            <ul className="flex items-center">

              <li className="group pl-6">

                <a href='#about'>
                  <span
                    className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                  >About</span>
                </a>

                <span
                  className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"
                ></span>
              </li>

              {/* <li className="group pl-6">

                  <a href='#services'>
                    <span
                      className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                    >Services
                    </span>
                  </a>

                  <span
                    className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"
                  ></span>
                </li> */}



              <li className="group pl-6">

                <a href='#portfolio'>
                  <span

                    className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                  >Portfolio
                  </span>
                </a>

                <span
                  className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"
                ></span>
              </li>

              {/* <li className="group pl-6">
                  <a href="#clients" >

                    <span
                      className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                    >Clients</span>
                  </a>

                  <span
                    className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"
                  ></span>
                </li> */}

              {/* <li className="group pl-6">
                  <a href='#work'>
                    <span
                      className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                    >Work</span>
                  </a>

                  <span
                    className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"
                  ></span>
                </li> */}

              <li className="group pl-6">
                <a href="#statistics" >

                  <span
                    className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                  >Statistics</span>
                </a>

                <span
                  className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"
                ></span>
              </li>

              <li className="group pl-6">
                <a href="#blog">
                  <span
                    className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                  >Blog</span>
                </a>

                <span
                  className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"
                ></span>
              </li>

              <li className="group pl-6">

                <a
                  href="/#feedback"
                  className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                >Feedback</a>

                <span
                  className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"
                ></span>
              </li>

              {/* <li className="group pl-6">
                  <a href="#contact">
                    <span
                      className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                    >Contact</span>
                  </a>

                  <span
                    className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"
                  ></span>
                </li> */}

            </ul>
          </div>
          <div className="block lg:hidden">
            <button onClick={() => setMobileMenu(true)}>
              <i className="bx bx-menu text-4xl text-white"> </i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`pointer-events-none fixed inset-0 z-70 min-h-screen bg-black bg-opacity-70 opacity-0 transition-opacity ${mobileMenu ? 'opacity-100 pointer-events-auto' : ''}`}>
        <div
          className="absolute right-0 min-h-screen w-2/3 bg-primary py-4 px-8 shadow md:w-1/3"
        >
          <button
            className="absolute top-0 right-0 mt-4 mr-4"
            onClick={() => setMobileMenu(false)}
          >
            <img src="/assets/img/icon-close.svg" className="h-10 w-auto" alt="" />
          </button>

          <ul className="mt-8 flex flex-col">

            <li className="py-2">

              <span
                onClick={() => {
                  document.getElementById('about').scrollIntoView();
                  setMobileMenu(false);
                }}
                className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
              >About</span>

            </li>

            {/* <li className="py-2">

                <span
                  // @click="triggerMobileNavItem('#services')"
                   onClick={() => {
                     document.getElementById('services').scrollIntoView();
                     setMobileMenu(false);
                  }}
                  className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                >Services</span>

              </li> */}

            <li className="py-2">

              <span
                onClick={() => {
                  document.getElementById('portfolio').scrollIntoView();
                  setMobileMenu(false);
                }}
                className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
              >Portfolio</span>

            </li>
            {/* 
              <li className="py-2">

                <span
                  onClick={() => {
                    document.getElementById('clients').scrollIntoView();
                    setMobileMenu(false);
                 }}
                  className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                >Clients</span>

              </li> */}

            {/* <li className="py-2">

                <span
                  className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                  onClick={() => {
                   document.getElementById('work').scrollIntoView();
                   setMobileMenu(false);
                }}
                >Work</span>

              </li> */}

            <li className="py-2">

              <span
                onClick={() => {
                  document.getElementById('statistics').scrollIntoView();
                  setMobileMenu(false);
                }}
                className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
              >Statistics</span>

            </li>

            <li className="py-2">
              <span
                onClick={() => {
                  document.getElementById('blog').scrollIntoView();
                  setMobileMenu(false);
                }}
                className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
              >Blog</span>

            </li>
            <li className="py-2">
              <span
                onClick={() => {
                  document.getElementById('feedback').scrollIntoView();
                  setMobileMenu(false);
                }}
                className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
              >Feedback</span>

            </li>
          

            {/* <li className="py-2">

                <span
                 onClick={() => {
                  document.getElementById('contact').scrollIntoView();
                  setMobileMenu(false);
               }}
                  className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                >Contact</span>

              </li> */}

          </ul>
        </div>
      </div>

    </div>
  )
}

export default NavbarHome
