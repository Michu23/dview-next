import React from "react";
import { Helmet } from "react-helmet";
import Logo from "../../public/assets/logoicon.svg";

const SEO = ({ title, description, name, type, image,canonical }) => {
  
  console.log(title);
  console.log(description);
  console.log(name);
  console.log(type);
  console.log(image);
  console.log(canonical);

  


  return (
    <Helmet
      onChangeClientState={(newState, addedTags, removedTags) => {
        console.log(newState);
        console.log(addedTags);
        console.log(removedTags);
        const metaTitle = document.querySelector("meta[name='title']");
        const metaDescription = document.querySelector(
          "meta[name='description']"
        );
        const metaImage = document.querySelector("meta[property='og:image']");
        const metaType = document.querySelector("meta[property='og:type']");
        const metaTwitterTitle = document.querySelector(
          "meta[name='twitter:title']"
        );
        const metaTwitterDescription = document.querySelector(
          "meta[name='twitter:description']"
        );
        const metaTwitterImage = document.querySelector(
          "meta[name='twitter:image']"
        );
        const metaTwitterCard = document.querySelector(
          "meta[name='twitter:card']"
        );
        const metaFacebookTitle = document.querySelector(
          "meta[property='og:title']"
        );
        const metaFacebookDescription = document.querySelector(
          "meta[property='og:description']"
        );
        const metaFacebookImage = document.querySelector(
          "meta[property='og:image']"
        );
        const metaFacebookType = document.querySelector(
          "meta[property='og:type']"
        );
          const canonicalLink = document.querySelector("link[rel='canonical']");
          if (canonicalLink) {
            canonicalLink.setAttribute("href", canonical);
          }



        if (metaTitle) {
          metaTitle.setAttribute("content", title);
        }
        if (metaDescription) {
          metaDescription.setAttribute("content", description);
        }
        if (metaImage) {
          metaImage.setAttribute("content", image);
        }
        if (metaType) {
          metaType.setAttribute("content", type);
        }

        if (metaTwitterTitle) {
          metaTwitterTitle.setAttribute("content", title);
        }
        if (metaTwitterDescription) {
          metaTwitterDescription.setAttribute("content", description);
        }
        if (metaTwitterImage) {
          metaTwitterImage.setAttribute("content", image);
        }
        if (metaTwitterCard) {
          metaTwitterCard.setAttribute("content", type);
        }
        if (metaFacebookTitle) {
          metaFacebookTitle.setAttribute("content", title);
        }
        if (metaFacebookDescription) {
          metaFacebookDescription.setAttribute("content", description);
        }
        if (metaFacebookImage) {
          metaFacebookImage.setAttribute("content", image);
        }
        if (metaFacebookType) {
          metaFacebookType.setAttribute("content", type);
      }
      }
      }

    
    >
      {/* Standard metadata tags */}
      <title
        data-react-helmet="true"

      >{title}</title>
    <meta charset="utf-8" />
      <meta name="title" content={title} 
        data-react-helmet="true"
      />
      <meta name="description" content={description}
        data-react-helmet="true"
      />
      <meta name="canonical" content={canonical}
        data-react-helmet="true"
      />
      <meta name="author" content={name}
        data-react-helmet="true"
      />
      <meta name="viewport" initial-scale="1.0" content="width=device-width" />
      <meta property="og:image" content={image}
        data-react-helmet="true"
      />
      <link rel="apple-touch-icon" href={Logo}
        data-react-helmet="true"
      />
    <link rel="icon" href={Logo} type="image/x-icon"/>


      {/* End standard metadata tags */}
      {/* Facebook tags */}
      <meta property="og:type" content={type}
        data-react-helmet="true"
      />
      <meta property="og:title" content={title} 
        data-react-helmet="true"
      />
      <meta property="og:description" content={description} 
        data-react-helmet="true"
      />
      {/* End Facebook tags */}
      {/* Twitter tags */}
      <meta name="twitter:creator" content={name}
        data-react-helmet="true"
      />
      <meta name="twitter:card" content={type} 
        data-react-helmet="true"
      />
      <meta name="twitter:title" content={title} 
        data-react-helmet="true"
      />
      <meta name="twitter:description" content={description} 
        data-react-helmet="true"
      />
      {/* End Twitter tags */}


      
        
        {/* <meta name="keywords"
        
        content="Dview Blog"
        
        
        />
        <meta name="author" content="Dview" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="google" content="notranslate" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Dview" />
        <meta name="twitter:creator" content="@Dview" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        <meta property="og:title" content={title} />
        <meta property="og:type" content={type} />
        <meta property="og:url" content={canonical} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:image:alt" content="Dview Blogs" />
        <meta property="og:site_name" content="Dview" />
        <meta property="og:locale" content="en_US" />
        <link rel="canonical" href={canonical} /> */}


    </Helmet>
  );
}

export default SEO;
