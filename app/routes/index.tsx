import { Link } from "@remix-run/react";
import Altcha from '../components/altcha'

import logo from "~/../public/img/ja1.png";
import header from "~/../public/img/ja6.png";
import header2 from "~/../public/img/ads/recads.png";
import cs from "~/../public/img/cs.jpg";

export default function Index() {
  return (
    <div className="container">
      <div className="logo">
        <img src={logo} alt="Jeffamazon Logo" />
      </div>
      <div className="content">
        <div className="inner-content">
          <div className="text">
            <h4>GIVE YOUR MIND A BREAK</h4>
            <h1>Scroll Less. Know More.</h1>
            <p>Enjoy one minute of zero noise ✨</p>
          </div>
      <form method="post" action="https://app.jeffamzn.com/subscription/form">
        <div className="input-wrapper">
          <input className="email" type="email" name="email" required placeholder="Email Address *" />
          <button className="submit" type="submit">Send it</button>
        </div>
          <Altcha />
        <input id="6d48f" type="hidden" name="l" value="6d48fffe-7d37-4c14-b317-3e4cda33a647" />
        <input type="hidden" name="nonce" />
      </form>
        </div>
        <div className="inner-content1">
            <img src={header} alt="Jeffamazon newsletter image" />
        </div>
      </div>
      <div className="inner-content2">
      <h2><span>Shilll</span> is a bespoke publisher</h2>
        <Link className="text" to="/subscribe">Shilll replaces infinite scrolling with one minute of zero noise. Our <span>email newsletters</span> are designed for people who actually value signal over noise.</Link>
      </div>

      <div className="floatimg">
          <img src={header2} alt="Jeffamazon newsletter image" />
      </div>
      <div className="inner-content25">
       <h2><span>Jeffamazon</span></h2>
            <Link className="text" to="/subscribe">Jeffamazon is a quick and insightful daily newsletter that helps you stay ahead in business strategy, technology, and economic trends.</Link>
      <div className="btn">
          <Link className="pricebtn" to="/subscribe">Subscribe for free</Link>
      </div>
      </div>
      <div className="inner-content255">
        <div className="side1">
       <h2><span>LEADERSHIP</span></h2>
      <p className="noclick">Founder</p>
      <p className="noclick">Chris Signore</p>
      <div className="btn">
          <Link className="pricebtn" to="/about">About</Link>
      </div>
        </div>
        <div className="side2">
          <img src={cs} alt="Founder image" />
        </div>
      </div>
      <div className="inner-content2555">
          <Link className="text" to="/about">" It helps me know what matters every day.</Link>
      <div className="tag">
      <p>
        CHRIS SIGNORE
      </p>
      <p>
        Founder
      </p>
      </div>
      </div>
       <div className="inner-content3">
      <div className="grid">
      <div className="box">
        <h1>Subscribe</h1>
        <p>Get Jeffamazon delivered straight to your inbox.</p>
          <Link className="text" to="/subscribe">Subscribe →</Link>
      </div>
      <div className="box">
        <h1>Advertise</h1>
        <p>Want to post? We're looking for new advertisers.</p>
          <Link className="text" to="/ads/ad-form">Get in touch →</Link>
      </div>
      </div>
    </div>
    </div>
  );
}