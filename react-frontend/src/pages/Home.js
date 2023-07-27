import React, { Fragment } from 'react'
import logo from '../logo.svg';
import '../App.css';
import { createClient } from "@sanity/client";

import { useState, useEffect } from 'react';
import { urlFor, client } from '../client';
import PortableText from "react-portable-text";
import { Meta } from 'react-head';
import { Helmet as Head } from 'react-helmet';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import imageUrlBuilder from '@sanity/image-url';
import NavbarHome from '../components/NavbarHome';
import Banner from '../components/Banner';
import About from '../components/About';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Clients from '../components/Clients';
import Achievement from '../components/Achievement';
import Blogs from '../components/Blogs';
import Work from '../components/Work';
import Contact from '../components/Contact';
import MapImg from '../components/Footer/MapImg';
import ContactForm from '../components/Footer/ContactForm';
import CopyRights from '../components/Footer/CopyRights';
import Feedback from '../components/Footer/FeedbackForm';
import Spinner from '../components/Spinner';





const Home = ({ blogs,about }) => {
  
  console.log("Printing about data from home")
  console.log(about);


  const [link, setLink] = useState([]);
  const [map, setMap] = useState([]);
  const [loading, setLoading] = useState(true) // Initialize loading state as true

  
  async function connectToSanity() {
    const linkQuery = `*[_type == "links"]`;
    const mapQuery =`*[_type == "map"]`;

    try {
      const linkData = await client.fetch(linkQuery);
      setLink(linkData);
      const mapData = await client.fetch(mapQuery);
      setMap(mapData);

    } catch (error) {
      console.error('Error fetching data from Sanity:', error);
    } finally {
      setLoading(false); // Update loading state to false after fetching data
    }
  }

  useEffect(() => {
    connectToSanity();
  }, []);
  console.log("Printing link data from home")
  console.log(link);
  const obj=link[0];
  console.log("Printing obj of link data from home")
  console.log(link);
  console.log("Printing map  data from home")
  console.log(map);
  // console.log("url map",`url(${urlFor(map.imageurl).url()})`)


 
  const mobileMenu = false;
  if (loading) {
    // Display a loading sign or component while fetching data
    return <Spinner/>;
  }

  return (
    <div>
      <div>
        <link
          crossOrigin="anonymous"
          href="./assets/styles/main.min.css"

          media="screen"
          rel="stylesheet"
        />
        </div>
       

        <NavbarHome />
        <Banner link={link} obj={obj}/>
        <About about={about} obj={obj}  />
       
        {/* <Services /> */}
        <Portfolio />
        {/* <Clients /> */}
        {/* <Work /> */}
        <Achievement />
        <Blogs blogs={blogs} />
        {/* <Contact/> */}
        <MapImg map={map}/>
        {/* <ContactForm/> */}
        <Feedback/>
        <CopyRights link={link} obj={obj}/>

    </div>
  )
}

export default Home;
