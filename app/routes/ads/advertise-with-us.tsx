import { Link } from "@remix-run/react";

import logo from "~/../public/img/ja1.png";
import header from "~/../public/img/ja3.png";
import header2 from "~/../public/img/ja3.png";

import carouselads from "~/../public/img/ads/carouselads.gif";
import videoads from "~/../public/img/ads/videoads.gif";
import imageads from "~/../public/img/ads/imageads.png";
import imageads2 from "~/../public/img/ads/imageads2.png";
import textads from "~/../public/img/ads/textads.png";
import newsads from "~/../public/img/ads/quickads.png";
import recads from "~/../public/img/ads/recads.png";
import takeoverads from "~/../public/img/ads/takeoverads.png";

export default function Index() {
  return (
    <div className="ads-container">
      <div className="logo">
        <img src={logo} alt="Jeffamazon Logo" />
      </div>
      <div className="content">
        <div className="inner-content">
          <div className="text">
            <h4>ADVERTISE WITH US</h4>
            <h1>Reach 44K+ of the world's most decisive people</h1>
            <p>We're the 1 min newsletters helping businesses do more 🚀</p>
          </div>
      <div className="btn">
            <Link className="pricebtn" to="/ads/ad-form">Request quote</Link>
      </div>
        </div>
        <div className="inner-content1">
            <img src={header} alt="Jeffamazon newsletter image" />
        </div>
      </div>
      <div className="inner-content2">
      <h2>Connect with your next customers on <span>Shilll</span></h2>
          <Link className="text" to="/ads/ad-form">Our audience is highly vetted, decisive, and always looking for what's new. So whether you want to use videos, images, or words, there's a Jeffamazon ad format that'll help you reach our audience.</Link>
      </div>
      <div className="inner-content3sm">
      <div className="grid">
      <div className="boxmat">
         <div className="floatimg">
          <img src={imageads} alt="Jeffamazon newsletter image" />
      </div>
      <div className="box">
        <h1>Image Ads</h1>
        <p>Image ads allow you to showcase your product or service with plain jane text and a single photo.</p>
      <div className="btn">
          <Link className="pricebtn" to="/ads/ad-form">Launch campaign</Link>
      </div>
      </div>
      </div>
            <div className="boxmat">
        <div className="floatimg">
            <img src={videoads} alt="Jeffamazon newsletter image" />
        </div>
      <div className="box">
        <h1>Video Ads</h1>
        <p>Video ads are short clips that turn your offer into content people are more likely to engage in.</p>
      <div className="btn">
          <Link className="pricebtn" to="/ads/ad-form">Launch campaign</Link>
      </div>
      </div>
     </div>
      </div>
    </div>
      <div className="inner-content3sm">
      <div className="grid">
      <div className="boxmat">
         <div className="floatimg">
          <img src={carouselads} alt="Jeffamazon newsletter image" />
      </div>
      <div className="box">
        <h1>Carousel Ads</h1>
        <p>Carousel ads automatically rotate up to six horizontally-shaped images to showcase multiple products.</p>
      <div className="btn">
          <Link className="pricebtn" to="/ads/ad-form">Launch campaign</Link>
      </div>
      </div>
      </div>
     <div className="boxmat">
        <div className="floatimg">
            <img src={textads} alt="Jeffamazon newsletter image" />
        </div>
        <div className="box">
        <h1>Text Ads</h1>
        <p>Text ads are the most simple and frictionless way to get your brands message across our audience.</p>
      <div className="btn">
          <Link className="pricebtn" to="/ads/ad-form">Launch campaign</Link>
      </div>
      </div>
     </div>
      </div>
    </div>      
    <div className="inner-content3sm">
      <div className="grid">
      <div className="boxmat">
         <div className="floatimg">
          <img src={newsads} alt="Jeffamazon newsletter image" />
      </div>
      <div className="box">
        <h1>Mini Ads</h1>
        <p>Mini ads appear above our feed, giving you an early chance to promote your product or service.</p>
      <div className="btn">
          <Link className="pricebtn" to="/ads/ad-form">Launch campaign</Link>
      </div>
      </div>
      </div>
     <div className="boxmat">
        <div className="floatimg">
            <img src={recads} alt="Jeffamazon newsletter image" />
        </div>
      <div className="box">
        <h1>Rec Ads</h1>
        <p>Rec ads give you a widescreen image and a CTA button to maximizes your.</p>
      <div className="btn">
          <Link className="pricebtn" to="/ads/ad-form">Launch campaign</Link>
      </div>
      </div>
     </div>
      </div>
    </div>
    <div className="inner-content3smm">
      <div className="grid">
     <div className="boxmat">
        <div className="floatimg2">
            <img src={takeoverads} alt="Jeffamazon newsletter image" />
        </div>
      <div className="box">
        <h1>Takeover Ads</h1>
        <p>Takeover ads give you a widescreen image and a CTA button to maximizes your engagement.</p>
      <div className="btn">
          <Link className="pricebtn" to="/ads/ad-form">Launch campaign</Link>
      </div>
      </div>
     </div>
      </div>
    </div>

       <div className="inner-content3">
      <div className="grid">
      <div className="box">
        <h1>82%</h1>
        <p>Most likely to try something new</p>
      </div>
      <div className="box">
        <h1>10X</h1>
        <p>More engagement per subscriber than the average newsletter.</p>
      </div>
      <div className="box">
        <h1>5X</h1>
        <p>More likely to click Jeffamazon ads over social media ads.</p>
      </div>
      </div>
    </div>
      <div className="inner-content25">
            <Link className="text" to="/ads/ad-form">" Using 3 or more ad formats increases campaign awareness by 20% and purchase intent by 7%.</Link>
      <div className="tag">
      <p>
        SOURCE
      </p>
      <p>
        Nielsen Brand Effect (US/UK/JP/CA), Q3 2015 - Q3 2018 Connect campaigns. Comparison is v. 1 ad format alone.
      </p>
      </div>
      </div>
      <div className="ad-form">
        <div className="inner-form">
          <div className="text">
            <h4>ADVERTISE WITH US</h4>
            <h1>Reach 32K+ of the world's most decisive people</h1>
            <p>We're the daily newsletter helping businesses do more.</p>
          </div>
        <div className="inner-content">
      <form method="post" action="https://app.jeffamzn.com/subscription/form">
        <div className="input-wrapper">
          <input className="email" type="text" name="firstName" required placeholder="First Name *" />
          <input className="email" type="text" name="lastName" required placeholder="Last Name *" />
          <input className="email" type="text" name="company" required placeholder="Company *" />
          <input className="email" type="email" name="email" required placeholder="Business Email Address *" />
          <button className="submit" type="submit">Request quote</button>
        </div>
        <div className="h-captcha" data-sitekey="7e96e6a6-eef8-4624-be9c-e468b5a8b230"></div>
        <input id="82687" type="hidden" name="l" value="82687238-ae68-46c7-98ad-183fbf4cfea0" />
        <input type="hidden" name="nonce" />
      </form>
            <img src={recads} alt="Jeffamazon newsletter image" />
        </div>
      </div>
        </div>
    </div> 
  );
}