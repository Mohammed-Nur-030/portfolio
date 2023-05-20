import { useParams } from 'react-router-dom';
import { client } from '../client';
import { useState, useEffect } from 'react';

const BlogPost = () => {
  const { slug } = useParams();
  const [blogPost, setBlogPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        const query = `*[_type == "blogs" && slug.current == "${slug}"][0]`;
        const data = await client.fetch(query);
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
    return <div>Loading...</div>;
  }

  if (!blogPost) {
    return <div>Blog post not found.</div>;
  }

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
                  <img src="/assets/img/blog-author.jpg" className="h-20 w-20 rounded-full border-2 border-grey-70 shadow"
                    alt="author image" />
                </div>
                <div className="pl-5">
                  <span className="block font-body text-xl font-bold text-grey-10">{blogPost.author}</span>
                  <span className="block pt-1 font-body text-xl font-bold text-grey-30">{blogPost.createdAt}</span>
                </div>
              </div>
            </div>
            <div className="prose max-w-none pt-8">
              <h2 id="lorem-ipsum-dolor-sit-amet">Lorem ipsum dolor sit amet</h2>

              <p>Introduction:
In a world that often emphasizes differences and creates divisions, there are stories that remind us of the power of love, hope, and resilience. "My Name is Khan" is one such story that touched the hearts of millions across the globe. Released in 2010, directed by Karan Johar, and featuring Shah Rukh Khan and Kajol in the lead roles, this film presents a powerful narrative that explores themes of identity, acceptance, and the triumph of the human spirit.
</p>

              <p>
Plot Summary:
The story revolves around Rizwan Khan, played by Shah Rukh Khan, a Muslim man with Asperger's syndrome, a condition that affects his social interactions and communication skills. Despite the challenges he faces, Rizwan is a kind-hearted and gentle individual who believes in the inherent goodness of people. After facing personal tragedy, he embarks on a journey to meet the President of the United States and convey a message of peace.
</p>
<p>
As Rizwan travels through different states and faces various obstacles, he encounters prejudice and discrimination due to his Muslim identity. His journey becomes a quest not only to meet the President but also to challenge societal prejudices and promote understanding and acceptance. Along the way, he meets Mandira, portrayed by Kajol, a single mother who becomes his love interest. Their relationship is tested when a tragedy strikes, leading to a conflict between love, faith, and societal expectations.
</p>
<p>
Themes Explored:

Identity and Belonging: Rizwan's struggle with his own identity, both as a person with Asperger's syndrome and as a Muslim in a post-9/11 world, raises questions about belonging and acceptance. The film highlights the importance of embracing diversity and finding common ground despite our differences.

Love and Relationships: The relationship between Rizwan and Mandira portrays the power of love to overcome barriers. It challenges societal norms and prejudices, emphasizing that love knows no boundaries.

Social Prejudices and Discrimination: "My Name is Khan" confronts the issue of prejudice and discrimination head-on. It sheds light on the experiences of Muslims and the impact of Islamophobia, urging society to reflect on its biases and work towards creating a more inclusive and compassionate world.

Resilience and Determination: Rizwan's unwavering determination to meet the President despite the challenges he faces demonstrates the power of resilience. His journey becomes a metaphor for the resilience of the human spirit and the ability to rise above adversity.
</p>
<p>
Impact and Reception:
"My Name is Khan" received critical acclaim for its powerful performances, emotional depth, and thought-provoking narrative. It resonated with audiences worldwide, earning praise for its portrayal of important social issues. The film's message of unity and acceptance struck a chord with viewers, promoting dialogue and understanding among people from diverse backgrounds.

Conclusion:
"My Name is Khan" is more than just a film; it is a story that inspires us to question our prejudices, embrace empathy, and foster acceptance. Through its compelling characters and engaging storyline, the film reminds us of the strength of love, hope, and resilience in overcoming societal barriers. It stands as a testament to the power of cinema to create social awareness and advocate for positive change in our world.

As we reflect on "My Name is Khan," let us strive to embody the film's message in our own lives by promoting inclusivity, challenging prejudices, and spreading love and acceptance. Together, we can build a society where diversity is celebrated, and the barriers that divide us are shattered, just like Rizwan Khan's indomitable spirit.

References:

IMDb: https://www.imdb.com/title/tt1188996/
Wikipedia:</p>

              <h3 id="lorem-ipsum-dolor-sit-amet-1">Lorem ipsum dolor sit amet</h3>

              <p>Possent quippe. Conata fera ab Hersilie iam auditur haesit. Culpa ignis retia Aonides ictus crescendo
                micantes, petere, ambustaque vicem in digitos iubet cornigeris.</p>

              <ul>
                <li>Iura demens satus vino simulac celanda</li>
                <li>Exhibuere frustra utque</li>
                <li>Iura demens satus vino simulac celanda</li>
                <li>Exhibuere frustra utque</li>
                <li>Panda pars umidus</li>
              </ul>

              <h4 id="lorem-ipsum-dolor-sit-amet-2">Lorem ipsum dolor sit amet</h4>

              <p>Possent quippe. Conata fera ab Hersilie iam auditur haesit. Culpa ignis retia Aonides ictus crescendo
                micantes, petere, ambustaque vicem in digitos iubet cornigeris.</p>

              <div className="language-plaintext highlighter-rouge">
                <div className="highlight">
                  
                </div>
              </div>

              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
                rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
                dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</p>
            </div>
       
            <div className="mt-10 flex justify-between border-t border-lila py-12">
              <a href="/" className="flex items-center">
                <i className="bx bx-left-arrow-alt text-2xl text-primary"></i>
                <span className="block pl-2 font-body text-lg font-bold uppercase text-primary md:pl-5">Previous Post</span>
              </a>
              <a href="/" className="flex items-center">
                <span className="block pr-2 font-body text-lg font-bold uppercase text-primary md:pr-5">Next Post</span>
                <i className="bx bx-right-arrow-alt text-2xl text-primary"></i>
              </a>
            </div>
            <div
              className="flex flex-col items-center border-t border-lila py-12 pt-12 md:flex-row md:items-start xl:pb-20">
              <div className="w-3/4 sm:w-2/5 lg:w-1/4 xl:w-1/5">
                <img src="/assets/img/blog-author.jpg" className="rounded-full shadow" alt="author image" />
              </div>
              <div className="ml-0 text-center md:ml-10 md:w-5/6 md:text-left">
                <h3 className="pt-10 font-body text-2xl font-bold text-secondary md:pt-0">
                  Christy Smith
                </h3>
                <p
                  className="pt-5 font-body text-lg leading-8 text-secondary sm:leading-9 md:text-xl md:leading-9 lg:leading-9 xl:leading-9">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.

                </p>
                <div className="flex items-center justify-center pt-5 md:justify-start">
                  <a href="/">
                    <i className="bx bxl-facebook-square text-2xl text-primary hover:text-yellow"></i>
                  </a>
                  <a href="/" className="pl-4">
                    <i className="bx bxl-twitter text-2xl text-primary hover:text-yellow"></i>
                  </a>
                  <a href="/" className="pl-4">
                    <i className="bx bxl-dribbble text-2xl text-primary hover:text-yellow"></i>
                  </a>
                  <a href="/" className="pl-4">
                    <i className="bx bxl-linkedin text-2xl text-primary hover:text-yellow"></i>
                  </a>
                  <a href="/" className="pl-4">
                    <i className="bx bxl-instagram text-2xl text-primary hover:text-yellow"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default BlogPost;
