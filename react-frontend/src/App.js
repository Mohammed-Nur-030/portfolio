import logo from './logo.svg';
import './App.css';
import { createClient } from "@sanity/client";
import React, { useState, useEffect } from 'react';
import { urlFor, client } from './client';
import PortableText from "react-portable-text";
import { Meta } from 'react-head';
import { Helmet as Head } from 'react-helmet';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Blog from './pages/blog';
import { Route, Routes } from 'react-router-dom';
import BlogPost from './pages/BlogPost';
import Home from './pages/Home';
import Spinner from './components/Spinner';
import Contact from './components/Contact';
import BlogPostHomePage from './pages/BlogPostHomePage';
// import SinglePost from './pages/SinglePost';

function App() {
  const [blogs, setBlogs] = useState([]);
  const [about, setAbout] = useState([]);
  

  const [loading, setLoading] = useState(true); // Initialize loading state as true

  async function connectToSanity() {
    const blogQuery = `*[_type == "blog"]`;
    const aboutQuery = `*[_type == "about"]`;
   

    try {
      const aboutData = await client.fetch(aboutQuery);
      setAbout(aboutData);

      const blogData = await client.fetch(blogQuery);
      setBlogs(blogData);



    } catch (error) {
      console.error('Error fetching data from Sanity:', error);
    } finally {
      setLoading(false); // Update loading state to false after fetching data
    }
  }

  useEffect(() => {
    connectToSanity();
  }, []);

  console.log("Printing about data from App")
  console.log(about);
  console.log("Printing blog data from App")
  console.log(blogs);
  


  if (loading) {
    // Display a loading sign or component while fetching data
    return <Spinner/> ;
  }

  return (
    <div>
      <Routes>
        
        <Route path="/" element={<Home blogs={blogs} about={about}  key="homepage"/>} />
        <Route  path="/blog" element={<Blog blogs={blogs} key="blog"/>} />
        <Route   path="/blog/:slug" element={<BlogPost />} key="blogPost"/>
        <Route   path="/:slug" element={<BlogPostHomePage />} key="blogPostPage"/>
      </Routes>
    </div>
  );
}

export default App;
