import React, { useEffect, useState } from 'react'
import { client } from "../client"
import { NavLink } from 'react-router-dom';

const About = ({ about, obj }) => {
  console.log("About prop:", about);
  console.log("About prop:link", obj);




  console.log("Printing About data")
  console.log(about);
  const aboutValue = about[0];
  console.log("Printing aboutValue data")
  console.log(aboutValue);
  // console.log("Printing heading")
  // console.log(obj.heading);
  // console.log("Printing content")
  // console.log(obj.content);



  return (
    <div>

      <div className="bg-grey-50" id="about">
        <div className="container flex flex-col items-center py-16 md:py-20 lg:flex-row">
          <div className="w-full text-center sm:w-3/4 lg:w-3/5 lg:text-left">
            <h2
              className="font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl"
            >
              Who am I?
            </h2>
            <h4
              className="pt-6 font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl"
            >
              {aboutValue.heading}
            </h4>
            <p className="pt-6 font-body leading-relaxed text-grey-20">
              {aboutValue.content}

            </p>
            <div
              className="flex flex-col justify-center pt-6 sm:flex-row lg:justify-start"
            >
              <div className="flex items-center justify-center sm:justify-start">
                <p className="font-body text-lg font-semibold uppercase text-grey-20">
                  Connect with me
                </p>
                <div className="hidden sm:block">
                  <i className="bx bx-chevron-right text-2xl text-primary"></i>
                </div>
              </div>
              <div
                className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0"
              >
                {/* <a href="/">
                    <i
                      className="bx bxl-facebook-square text-2xl text-primary hover:text-yellow"
                    ></i>
                  </a>
                  <a href="/" className="pl-4">
                    <i
                      className="bx bxl-twitter text-2xl text-primary hover:text-yellow"
                    ></i>
                  </a> */}
                <NavLink to={obj.github} target='_blank' className="pl-4">
                  <i
                    className="bx bxl-github text-2xl text-primary hover:text-yellow"
                  ></i>
                </NavLink>
                <NavLink to={obj.linkedin} target='_blank' className="pl-4">
                  <i
                    className="bx bxl-linkedin text-2xl text-primary hover:text-yellow"
                  ></i>
                </NavLink>
                <NavLink to={obj.instagram} target='_blank' className="pl-4">
                  <i
                    className="bx bxl-instagram text-2xl text-primary hover:text-yellow"
                  ></i>
                </NavLink>
              </div>
            </div>
          </div>

          <div className="skills-icon flex flex-row w-full mx-6 pl-0 pt-10 sm:w-3/4 lg:w-2/5 lg:pl-12 lg:pt-0  justify-center items-center">

            <div className='grid grid-cols-4 gap-2  '>
            <div className='img-container  hover:scale-150 transform duration-100 ease-in flex items-center justify-center  '>
                <img src="../assets/img/typescript.png" 
                  className='hover:scale-120 transform duration-100 ease-in '
                alt="Typescript" />
              </div>
              <div className='img-container  hover:scale-150 transform duration-100 ease-in flex items-center justify-center  '>
                <img src="../assets/img/prisma-seeklogo.svg" 
                  className='hover:scale-120 transform duration-100 ease-in '
                alt="Prisma" />
              </div>
              <div className='img-container  hover:scale-150 transform duration-100 ease-in flex items-center justify-center  '>
                <img src="../assets/img/next-js-seeklogo.svg" 
                  className='hover:scale-120 transform duration-100 ease-in '
                alt="Nextjs" />
              </div>
              <div className='img-container  hover:scale-150 transform duration-100 ease-in flex items-center justify-center  '>
                <img src="../assets/img/postgresql-seeklogo.svg" 
                  className='hover:scale-120 transform duration-100 ease-in '
                alt="Postgres" />
              </div>
              <div className='mx-2 mr-2 hover:scale-150 transform duration-100 ease-in flex items-center justify-center  '>
                <img src="../assets/img/auth0-seeklogo.svg" 
                  className='hover:scale-120 transform duration-100 ease-in '
                alt="Auth0" />
              </div>
              <div className=' mx-2  hover:scale-150 transform duration-100 ease-in flex items-center justify-center  '>
                <img src="../assets/img/docker-seeklogo.svg" 
                  className='hover:scale-120 transform duration-100 ease-in '
                alt="Docker" />
              </div>
              <div 
              className='img-container 
                hover:scale-150 transform duration-100 ease-in  '
              >
                <img src="../assets/img/node.png" 
                className='hover:scale-120 transform duration-100 ease-in '
                alt="node" />
              </div>

              <div className='img-container  hover:scale-150 transform duration-100 ease-in   '>
                <img src="../assets/img/react.png" 
                  className='hover:scale-120 transform duration-100 ease-in w-full h-full'
                alt="react" />
              </div>
              <div className='img-container  hover:scale-150 transform duration-100 ease-in  '>
                <img src="../assets/img/redux.png"
                  className='hover:scale-120 transform duration-100 ease-in'
                alt="redux" />
              </div>
              <div className='img-container  hover:scale-150 transform duration-100 ease-in  '>
                <img src="../assets/img/javascript.png"
                  className='hover:scale-120 transform duration-100 ease-in'
                alt="Javascript" />
              </div>
              <div className='img-container  hover:scale-150 transform duration-100 ease-in  '>
                <img src="../assets/img/css.png" 
                  className='hover:scale-120 transform duration-100 ease-in'
                alt="CSS" />
              </div>
              <div className='img-container  hover:scale-150 transform duration-100 ease-in  '>
                <img src="../assets/img/html.png"
                  className='hover:scale-120 transform duration-100 ease-in'
                alt="HTML" />
              </div>
              <div className='img-container  hover:scale-150 transform duration-100 ease-in  '>
                <img src="../assets/img/cpp.png"
                  className='hover:scale-120 transform duration-100 ease-in'
                alt="C++" />
              </div>
              <div className=' hover:scale-150 transform duration-100 ease-in   my-4 py-2 '>
                <img src="../assets/img/sanity.png" className=' hover:scale-120 transform duration-100 ease-in w-full h-full '
                 alt="Sanity" />
              </div>
              <div className='img-container  hover:scale-150 transform duration-100 ease-in  '>
                <img src="../assets/img/mongodb.png" 
                  className='hover:scale-120 transform duration-100 ease-in'
                alt="MongoDb" />
              </div>
              <div className='img-container  hover:scale-150 transform duration-100 ease-in  '>
                <img src="../assets/img/express.png" 
                  className='hover:scale-120 transform duration-100 ease-in'
                alt="Express" />
              </div>
              <div className='img-container  hover:scale-150 transform duration-100 ease-in  '>
                <img src="../assets/img/git.png" 
                  className='hover:scale-120 transform duration-100 ease-in'
                alt="Git" />
              </div>
            
            </div>

          </div>

        </div>
      </div>

    </div>
  )
}

export default About
