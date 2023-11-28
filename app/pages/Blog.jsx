"use client"
import React, { useContext, useEffect, useState } from "react";
import StateContext from "../context/StateContext";
import { useParams } from "react-router-dom";
import { Loader } from "../../components/common";
import ReactGA from "react-ga4";
import Form from "../../components/Home/Form";

import Linkedin from "../../public/assets/Icons/Linkedin logo.svg";
import Facebook from "../../public/assets/Icons/Facebook icons.svg";
import Twitter from "../../public/assets/Icons/Twitter logo.svg";
import Whatsapp from "../../public/assets/Icons/Whatsapp icon.svg";

import SEO from "../../Helmet/SEO";


const Blog = () => {
  const { blogData,seoData, setSeoData } = useContext(StateContext);
  const { name } = useParams();
  // const url = `https://www.dview.io/blog/${name}`;
  console.log(name);

  const [isBlogLoading, setIsBlogLoading] = useState(true);

  const setCurrBlogContent = () => {
    if (blogData && blogData.length) {
      const currBlogData = blogData.filter(
        (blog) => blog.meta_data.url_title === name
      )[0];
      setIsBlogLoading(false);
      document.getElementById("blog-content").innerHTML = currBlogData?.content;
      ReactGA.send({
        hitType: "pageview",
        page: currBlogData.meta_data.url_title,
        title: "Blog - " + currBlogData.heading,
      });
      console.log(currBlogData);

    
       
      

      var url = `https://www.dview.io/blog/${currBlogData?.meta_data.url_title}`;
      // const slug = encodeURIComponent(currBlogData?.meta_data.url_title);
      const title = encodeURIComponent(currBlogData.heading);
      const blogname = currBlogData.heading;
      const description = encodeURIComponent(currBlogData.description);
      // const ogImage = encodeURIComponent(currBlogData?.meta_data.blogOptionImg);
      // const source = "https://www.dview.io";
      const type = "Articles"

      console.log(title);

      var blogimg = currBlogData?.meta_data.blogOptionImg;
      console.log(blogimg);


      setSeoData(prevSeoData => ({
        ...prevSeoData,
        image: blogimg,
        title: blogname,
        description: description,
        canonical: url,
        type: type,
      }));


// LinkedIn
const linkedInShareLink = `https://www.linkedin.com/feed/?shareActive=true&text= ${title} - ${description}  ${url} %23NewPost %23Blog %23DataEngineering %23DviewTechnologies`;
document.getElementById("linkedin-share-link").setAttribute("href", linkedInShareLink);

// Facebook
const facebookShareLink = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
document.getElementById("facebook-share-link").setAttribute("href", facebookShareLink);

// Twitter
const twitterShareLink = `https://twitter.com/intent/tweet?text=${title}&url=${url}`;
document.getElementById("twitter-share-link").setAttribute("href", twitterShareLink);

// WhatsApp
const whatsappShareLink = `https://api.whatsapp.com/send?text=${title}%20${url}`;
document.getElementById("whatsapp-share-link").setAttribute("href", whatsappShareLink);

    }
  };

  useEffect(() => {
    setCurrBlogContent();
  }, [blogData]);

  useEffect(() => {
    setCurrBlogContent();
  }, [name]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="blog">
      <SEO
        title={seoData ? seoData.title : ""}
        description={seoData ? seoData.description : ""}
        type={seoData ? seoData.type : ""}
        canonical={seoData ? seoData.canonical : ""}
        image={seoData ? seoData.image : ""}
      />

      {/* <Helmet>
       
      </Helmet> */}

      <Loader isLoading={isBlogLoading} />
      <div className="container-fluid mh p-0 m-0 blog">
        <div id="blog-content"></div>
        <div className="container py-5">
          <p className="ch p1">
            Share to:
          </p>
          <div className="d-flex gap-3 mb-5">

        <a id="linkedin-share-link" href="" target="_blank" 
        rel="noopener noreferrer"
        >
          <img className="scale0" src={Linkedin} alt="" />
        </a>
        <a id="facebook-share-link" href="" target="_blank"
        rel="noopener noreferrer"
        >
          <img className="scale0" src={Facebook} alt="" />
        </a>
        <a id="twitter-share-link" href="" target="_blank"
        rel="noopener noreferrer"
        >
          <img className="scale0" src={Twitter} alt="" />
        </a>
        <a id="whatsapp-share-link" href="" target="_blank"
        rel="noopener noreferrer"
        >
          <img className="scale0" src={Whatsapp} alt="" />
        </a>
          </div>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Blog;
