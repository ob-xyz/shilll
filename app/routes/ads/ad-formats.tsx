import { useEffect } from "react";

import logo from "~/../public/img/ja1.png";
import newads from "~/../public/img/newads.jpg";
import convertads from "~/../public/img/convertads.jpg";
import takeoverbg from "~/../public/img/takeoverbg.jpg";

import carouselads from "~/../public/img/ads/carouselads.gif";
import videoads from "~/../public/img/ads/videoads.gif";
import imageads from "~/../public/img/ads/imageads.png";
import textads from "~/../public/img/ads/textads.png";
import quickads from "~/../public/img/ads/quickads.png";
import recads from "~/../public/img/ads/recads.png";
import takeoverads from "~/../public/img/ads/takeoverads.png";

export default function Index() {
    useEffect(() => {
    // Dynamically load the hCaptcha script
    const script = document.createElement("script");
    script.src = "https://js.hcaptcha.com/1/api.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    // Clean up script on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
  <div className="content-adformats">
    <div className="logo">
      <img src={logo} alt="Jeffamazon Logo" />
    </div>
 <div className="content-awu3">
      <div className="header">
          <h4>GET STARTED</h4>
          <h3>Jeffamazon Ads</h3>
      </div>
      <div className="grid">
      <div className="box">
        <img src={convertads} />
        <h1>Promote your posts</h1>
        <p>Jeffamazon Ads can support a variety of posts you've already made on LinkedIn, Instagram, Facebook, or X. Instantly get more engagement on your favorite posts.</p>
      </div>
      <div className="box">
        <img src={newads} />
        <h1>Promote your campaigns</h1>
        <p>Give your existing ad campaigns on LinkedIn, Instagram, Facebook, or X a new place to perform—the email inbox.</p>
      </div>
      </div>
    </div>
    
     <div className="content-awu3">
      <div className="header">
          <h4>MOST POPULAR</h4>
          <h3>Image and Text Ads</h3>
      </div>
      <div className="grid">
      <div className="box">
        <img src={imageads} />
        <h1>Image Ads</h1>
        <p>Image ads allow you to showcase your product or service with plain jane text and a single photo.</p>
      </div>
      <div className="box">
        <img src={textads} />
        <h1>Text Ads</h1>
        <p>Text Ads are the most simple and frictionless way to get your brands message across our audience.</p>
      </div>
      </div>
    </div>
         <div className="content-awu3">
      <div className="header">
          <h4>MOST ENGAGING</h4>
          <h3>Carousel and Video Ads</h3>
      </div>
      <div className="grid">
      <div className="box">
        <img src={carouselads} />
        <h1>Carousel Ads</h1>
        <p>Carousel Ads automatically rotate up to six horizontally-shaped images to showcase multiple products or promotions.</p>
      </div>
      <div className="box">
        <img src={videoads} />
        <h1>Video Ads</h1>
        <p>Video Ads are short clips that make your products feel alive and invested to learn more through your website, app, or brand message.</p>
      </div>
      </div>
    </div>
     <div className="content-awu3">
      <div className="header">
          <h4>NEWEST</h4>
          <h3>Quick Ads</h3>
      </div>
      <div className="grid">
      <div className="box">
        <img src={quickads} />
        <h1>Quick Ads</h1>
        <p>Quick Ads appear in the "Today's News" section, and gives you the chance to promote your product or service.</p>
      </div>
      <div className="box">
        <img src={recads} />
        <h1>Quick Content Ads</h1>
        <p>Quick Content Ads appear in the "Recs" section, making it easy for you to recommend a podcast or video.</p>
      </div>
      </div>
    </div>
        <div className="content-awu4">
      <div className="header">
          <h4>MOST ACTION</h4>
          <h3>Takeover Ads</h3>
      </div>
      <div className="grid">
      <div className="box">
        <img src={takeoverads} />
        <h1>Takeover Ads</h1>
        <p>Give your favorite ads a big experience that takes over our timeline with a widescreen image and a CTA button to maximize engagement to your website or app.</p>
      </div>
      </div>
    </div>
    <div className="btn">
    <a href="mailto:chris@jeffamazon.com" className="pricebtn">
          Start a campaign
    </a>
    </div>
  </div>
  );
}
   