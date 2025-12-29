import { useEffect, useState } from "react";

import logo from "~/../public/img/ja1.png";
import imageads from "~/../public/img/promoted-ads.png";
import carouselads from "~/../public/img/ads/carouselads.gif";
import videoads from "~/../public/img/ads/videoads.gif";
import textads from "~/../public/img/text-ads.png";

const ads = [
  {
    image: imageads,
    title: "Images Ads",
    description:
      "Showcase your product or service with a single image, six-images, or a short video.",
  },  
  {
    image: carouselads,
    title: "Carousel Ads",
    description:
      "Rotate up to six images to showcase multiple products or promotions.",
  },
  {
    image: videoads,
    title: "Video Ads",
    description:
      "Make products feel alive and drive engagement to your website, app, or brand message.",
  },
    {
    image: textads,
    title: "Text Ads",
    description:
      "Use plain jane words to say something that gets your brands message across our audience.",
  },
];

export default function Index() {
  const [adIndex, setAdIndex] = useState(0);

  // Ads carousel handlers (unchanged)
  const next = () => setAdIndex((prev) => (prev + 1) % ads.length);
  const prev = () => setAdIndex((prev) => (prev - 1 + ads.length) % ads.length);
  
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
  <div className="content-awu">
    <div className="logo">
      <img src={logo} alt="Jeffamazon Logo" />
    </div>
    <div className="content-awu2">
          <h1>Reach 10K+ professional people aiming to stay ahead.</h1>
          <div className="text">
          <h4>MOST POPULAR</h4>
          <h3>Jeffamazon ad formats</h3>
          </div>
    </div>
    <div className="ads-carousel-txt">
    <div className="adsbox">
      <p>Jeffamazon Ads can support a variety of media formats through the following sub-categories:</p>
    <ul>
      <li>
        <b>Image Ads </b>
        allow you to showcase your product or service with a single photo.
      </li>
      <li>
        <b>Carousel Ads </b>
        automatically rotate up to six horizontally-shaped images to showcase multiple products or promotions.
      </li>
      <li>
        <b>Video Ads </b>
        make products feel alive while driving people to your website, app, or brand message.
      </li>
      <li>
        <b>Text Ads </b>
        are the most simple and frictionless way to say something and get a message directly to our audience.
      </li>
    </ul>
    <div className="btn">
    <a href="mailto:chris@jeffamazon.com" className="pricebtn">
          Start a campaign
    </a>
    </div>
    </div>

    <div className="ads-carousel">
      <button className="carousel-button prev" onClick={prev}>◀</button>
      <button className="carousel-button next" onClick={next}>▶</button>
      <div
        className="carousel-track"
        style={{ transform: `translateX(-${adIndex * 100}%)` }}
      >
        {ads.map((ad, i) => (
          <div className="carousel-slide" key={i}>
            <div className="box">
              <img src={ad.image} alt={ad.title} />
              <h1>{ad.title}</h1>
              <p>{ad.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>

    <div className="content-awu6">
    <div className="header">
      <h4>ADVERTISE WITH US</h4>
      <h3>Using 3 or more ad formats increases campaign awareness by 20% and purchase intent by 7%.</h3>
      <p>Source: Nielsen Brand Effect (US/UK/JP/CA), Q3 2015 - Q3 2018 Connect campaigns. Comparison is v. 1 ad format alone.</p>
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