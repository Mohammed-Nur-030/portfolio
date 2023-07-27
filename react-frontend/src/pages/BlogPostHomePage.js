import React from 'react'
import { NavLink, Link,useParams } from 'react-router-dom';
import { client } from '../client';
import { useState, useEffect } from 'react';
import Spinner from '../components/Spinner';

const BlogPostHomePage = () => {
    const { slug } = useParams();
    const [blogPost, setBlogPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [about, setAbout] = useState([]);
    useEffect(() => {
      const fetchBlogPost = async () => {
        try {
          const query = `*[_type == "blog" && slug.current == "${slug}"][0]`;
          const aboutQuery = `*[_type == "links"]`;
          const data = await client.fetch(query);
           const aboutData = await client.fetch(aboutQuery);
             setAbout(aboutData)
          setBlogPost(data);
        } catch (error) {
          console.error('Error fetching blog post:', error);
        } finally {
          setLoading(false); 
        }
      };
  
      fetchBlogPost();
    }, [slug]);
  
    if (loading) {
      return <Spinner/>;
    }
  
    if (!blogPost) {
      return <div>Blog post not found.</div>;
    }
    console.log("blogPost")
    console.log(blogPost)
    const blogObject = blogPost?.content.find(item => item._type === 'block');
    console.log("blogObject")
    console.log(blogObject)
   
  
    return (
      <div>
        {/* <h1>{blogPost.title}</h1>
        <p>{blogPost.metadesc}</p> */}
        {/* Render the rest of the blog post content */}
        
        <div>
          <div className="container py-6 md:py-10">
            <div className="mx-auto max-w-4xl">
              <div className="">
                <h1 className="pt-5 font-body text-3xl font-semibold text-primary sm:text-4xl md:text-5xl xl:text-6xl">
                {blogPost.title}
                </h1>
                <div className="flex items-center pt-5 md:pt-10">
                  <div>
                    <img  src="/assets/img/Nur-final.jpg" className="h-20 w-20 rounded-full border-2 border-grey-70 shadow"
                      alt="author image" />
                  </div>
                  <div className="pl-5">
                    <span className="block font-body text-xl font-bold text-grey-10">{blogPost?.author}</span>
                    <span className="block pt-1 font-body text-xl font-bold text-grey-30"> {new Date(blogPost?.createdAt).toLocaleString()} </span>
                  </div>
                </div>
              </div>
              <div className="prose max-w-none pt-8">
                <h2 id="lorem-ipsum-dolor-sit-amet">{blogPost?.title}</h2>
                <div>
                  {
                    
                    blogObject?.children[0]?.text
                  }
                </div>
  
   
                <div className="ml-0 text-center md:ml-10 md:w-5/6 md:text-left">
                  <h3 className="pt-10 font-body text-2xl font-bold text-secondary md:pt-0">
                    {blogPost?.author}
                  </h3>
                  <p
                    className="pt-5 font-body text-lg leading-8 text-secondary sm:leading-9 md:text-xl md:leading-9 lg:leading-9 xl:leading-9">
                   I am a CS student and experienced MERN stack developer with a passion for innovative solutions. With expertise in MongoDB, Express.js, React.js, and Node.js, I have successfully delivered diverse projects, and I'm excited to collaborate with you to bring your ideas to life. Explore my portfolio to see examples of my web development skills, and feel free to contact me today.
  
                  </p>
                  <div className="flex items-center justify-center pt-5 md:justify-start">
                  
                    <Link to={about[0]?.github}  className="pl-4">
                      <i className="bx bxl-github text-2xl text-primary hover:text-yellow"></i>
                    </Link>
                    <Link to="/" className="pl-4">
                      <i className="bx bxl-linkedin text-2xl text-primary hover:text-yellow"></i>
                    </Link>
                    <Link to="/" className="pl-4">
                      <i className="bx bxl-instagram text-2xl text-primary hover:text-yellow"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  
      </div>
    );
  };
 


export default BlogPostHomePage
