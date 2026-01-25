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
            <p>Start, build, and get compensated like a founder. Immediate vesting. Zero cliffs. Bigger upside 🚀</p>
          </div>
        <div className="btn">
              <Link className="pricebtn" to="/ads/ad-form">Request access</Link>
        </div>
        </div>
      </div>
      <div className="inner-content2">
      <h2>Enjoy a compensation package that's as flexible as you are</h2>
        <Link className="text" to="/subscribe">Shilll's mission is helping builders live more.</Link>
        <br /><br /><br />
        <Link className="text" to="/subscribe">For decades, the only path to success was climbing "The Ladder" where the reward for excellence means spending the prime years of your career chasing a title and fixed salary that's not even based on your actual performance.</Link>
        <br /><br /><br />
        <Link className="text" to="/subscribe">Shilll offers builders, solo entrepreneurs, and small teams of up to five people the ability to mix and match how they want to be compensated in base salary, equity preference, restricted stock units, and stock options.</Link>      
        <br /><br /><br />
        <Link className="text" to="/subscribe">Shilll helps you start, build, and get compensated like a founder. Enjoy immediate vesting. Zero cliffs. And bigger upside.</Link>      
        </div>
      <div className="floatimg">
          <img src={header2} alt="Jeffamazon newsletter image" />
      </div>
      <div className="inner-content25">
       <h2><span>Jeffamazon</span></h2>
          <p><a className="pricebtn" href="https://jeffamazon.com/subscribe">Check out our daily newsletter</a></p>
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
          <Link className="text" to="/about">" Shilll is for builders who like winning more</Link>
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