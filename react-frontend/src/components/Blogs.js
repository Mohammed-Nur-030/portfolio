import React from 'react'
// import logo from '../assets/logo.svg';
import '../App.css';

import { useState, useEffect } from 'react';
import { urlFor, client } from '../client';
import PortableText from "react-portable-text";

import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
// import Home from './pages/Home';
import imageUrlBuilder from '@sanity/image-url';
import Blog from '../pages/blog';
import { Route, Routes } from 'react-router-dom';

import BlogPost from '../pages/BlogPost';
import Home from '../pages/Home';
import { useNavigate } from 'react-router-dom';

const Blogs = ({ blogs }) => {
 
  const navigate = useNavigate();
  // const navigate1  = useNavigate();
  console.log("blogs")
  console.log(blogs)

  const clickHandler = () => {
    navigate('/blog');
  };
  // const clickReadMoreHandler = (slug) => {
    
  //   navigate1(`/single/${slug}`);  };
  return (
    <div>

      <div className="bg-grey-50" id="blog">
        <div className="container py-16 md:py-15">
          <h2
            className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl"
          >
            I also like to write
          </h2>
          <h4
            className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl"
          >
            Check out my latest posts!
          </h4>
          <div
            className="mx-auto grid w-full grid-cols-1 gap-6 pt-12 sm:w-3/4 lg:w-full lg:grid-cols-3 xl:gap-10">
            {
            blogs.map((item, index) => {
              const imageObject = item?.content.find(item => item._type === 'image');
              console.log("imageObject")
              console.log(imageObject)
              return(
                <div key={index}>

                <Link to={`/${item.slug.current}`} className="shadow">
                  <div
                    // style={{ backgroundImage: `url(${builder.image(item.imageUrl).width(30).url()}) `}}
                    // style={{ backgroundImage: `  /assets/img/post-01.png)`}}
                    style={{
                      // backgroundImage: `url(${urlFor(item.imageUrl).url()})`,
                      backgroundImage: `url(${urlFor(imageObject?.asset?._ref)})`,
                    }}

                    className="group relative h-72 bg-cover bg-center bg-no-repeat sm:h-84 lg:h-64 xl:h-72"
                  >
                    <span className="absolute inset-0 block bg-gradient-to-b from-blog-gradient-from to-blog-gradient-to bg-cover bg-center bg-no-repeat opacity-10 transition-opacity group-hover:opacity-50"></span>
                    <span className="absolute right-0 bottom-0 mr-4 mb-4 block rounded-full border-2 border-white px-6 py-2 text-center font-body text-sm font-bold uppercase text-white md:text-base">
                      Read More
                    </span>
                  </div>
                  <div className="bg-white py-6 px-5 xl:py-8">
                    <span className="block font-body text-lg font-semibold text-black">{item.title}</span>
                    <span className="block pt-2 font-body text-grey-20">
                      {item.metadesc}
                    </span>
                  </div>
                </Link>
              </div>
              )
             
            })
          }
            {/* --------------------- */}


          </div>
        </div>
        {/* <div className='flex justify-center py-8'>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={clickHandler}>
          See More..
        </button>
        </div> */}
      </div>


    </div>

  )
}

export default Blogs
