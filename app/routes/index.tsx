import { Link } from "@remix-run/react";
import Altcha from "../components/altcha";

import logo from "~/../public/img/ja1.png";
import header2 from "~/../public/img/ja6.png";
import cs from "~/../public/img/cs.jpg";

export default function Index() {
  return (
    <div className="container">
      <div className="logo">
        <img src={logo} alt="Shilll Logo" />
      </div>
      <div className="content">
        <div className="inner-content">
          <div className="text">
            <h1>Shilll offers founder level compensation to builders</h1>
            <p>Build your own compensation package. Get immediate vesting. Zero cliffs. And the same tax-upside as a startup founder 🚀</p>
          </div>
        <div className="btn">
              <Link className="pricebtn" to="/ads/ad-form">Try shilll</Link>
        </div>
        </div>
      </div>
      <div className="inner-content2">
      <h2>Build a compensation package that's as flexible as you are</h2>
        <Link className="text" to="/subscribe">Shilll's mission is helping builders get compensated.</Link>
        <br /><br /><br />
        <Link className="text" to="/subscribe">For decades, the only path to success was climbing "The Ladder" where the reward for excellence means spending the prime years of your career chasing a title and fixed salary that's not even based on what you can build.</Link>
        <br /><br /><br />
        <Link className="text" to="/subscribe">Shilll offers builders, solo entrepreneurs, and small teams of up to five people the ability to mix and match how they want to be compensated in base salary, equity preference, restricted stock units, and stock options.</Link>      
        <br /><br /><br />
        <Link className="text" to="/subscribe">Shilll gives you immediate vesting with zero cliffs. And the same tax-upside as a startup founder.</Link>      
        </div>
      <div className="floatimg">
          <img src={header2} alt="Jeffamazon newsletter image" />
      </div>
      <div className="inner-content25">
       <h2><span>Jeffamazon</span></h2>
            <Link className="text" to="/subscribe">Check out our daily newsletter</Link>
      <div className="btn">
          <a className="pricebtn" href="https://jeffamazon.com/subscribe">Subscribe for free</a>
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
          <Link className="text" to="/about">" Shilll is for builders who like winning and living more.</Link>
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
        <p>Want to post in Jeffamazon? We're looking for advertisers.</p>
          <Link className="text" to="/ads/ad-form">Get in touch →</Link>
      </div>
      </div>
    </div>
    </div>
  );
}