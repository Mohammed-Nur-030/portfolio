import React from 'react'
import '../App.css';
// import { createClient } from "@sanity/client";

import { useState, useEffect } from 'react';
import { urlFor, client } from '../client';
// import PortableText from "react-portable-text";

// import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
// import Home from './pages/Home';
// import './main.min.css'
import imageUrlBuilder from '@sanity/image-url';
import Navbar from '../components/Navbar';

const Blog = ({blogs}) => {
  // const [blogs, setBlogs] = useState([]);


  // useEffect(({blogs}) => {

  // //   const query = `*[_type == "blogs"][0...2]`;//should erite the name
  // //   client.fetch(query)
  // //     .then((data) => setBlogs(data))


  //  }, []);
  console.log("blogs in blog page")
  console.log(blogs);
  console.log(blogs.length)
  
  return (
    <div>
      <Navbar/>
      <div className="bg-grey-50" id="blog">
          <div className="container py-16 md:py-20 mx-auto">
            <h3
              className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl"
            >
              Check out my latest posts!
            </h3>
          
            <div
              className="mx-auto grid w-full grid-cols-1 gap-6 pt-12 sm:w-3/4 lg:w-full lg:grid-cols-3 xl:gap-10">
              {blogs.map((item, index) => (
                <div key={index}>
                  <Link to={`/blog/${item.slug.current}`} className="shadow">
                    <div
                      // style={{ backgroundImage: `url(${builder.image(item.imageUrl).width(30).url()}) `}}
                      // style={{ backgroundImage: `  /assets/img/post-01.png)`}}
                      style={{
                        backgroundImage: `url(${urlFor(item.imageUrl).url()})`,
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
              ))}
            </div>
          </div>
        </div>

    </div>
  )
}

export default Blog
