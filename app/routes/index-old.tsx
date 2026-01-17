import { Link } from "@remix-run/react";
import Altcha from '../components/altcha'

import logo from "~/../public/img/ja1.png";
import header from "~/../public/img/ja3.png";
import header2 from "~/../public/img/ads/recads.png";
import header3 from "~/../public/img/ads/recads2.png";
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
            <h4>EMPOWERING INDIVIDUALS</h4>
            <h1>Less Scroll. More Life.</h1>
            <p>1-minute newsletters made for your mind ✨</p>
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
        <Link className="text" to="/subscribe">Shilll replaces infinite scrolling with intentional insights. <span>Our 1 min newsletters are meticulously designed</span> to empower the minds of individuals across the world.</Link>
      </div>
      <div className="inner-content3sm">
      <div className="grid">
      <div className="boxmat">
         <div className="floatimg">
          <img src={header2} alt="Jeffamazon newsletter image" />
      </div>
      <div className="box">
        <h1>Jeffamazon</h1>
        <p>Daily business news</p>
      <div className="btn">
          <a className="pricebtn" href="https://jeffamazon.com/subscribe">Subscribe for free</a>
      </div>
      </div>
      </div>
            <div className="boxmat">
        <div className="floatimg">
            <img src={header3} alt="The Poast newsletter image" />
        </div>
      <div className="box">
        <h1>The Poast</h1>
        <p>Weekly local news</p>
      <div className="btn">
          <a className="pricebtn" href="https://thepoast.com/subscribe">Subscribe for free</a>
      </div>
      </div>
     </div>
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
          <Link className="text" to="/about">" In a world full of AI brainrot it's good to know what really matters.</Link>
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
        <p>Get what matters delivered straight to your inbox.</p>
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