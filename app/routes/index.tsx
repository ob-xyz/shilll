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
            <h1>Shilll unlocks real upside for builders</h1>
            <p>Get founder level compensation for your contributions. Immediate vesting. Zero cliffs. Real upside ✨</p>
          </div>
        <div className="btn">
              <Link className="pricebtn" to="/forms/get-access">Request access</Link>
        </div>
        </div>
      </div>
      <div className="inner-content2">
      <h2>Get real upside with <span>Shilll</span></h2>
        <Link className="text" to="/forms/get-access">Shilll's mission is to help you build your life.</Link>
        <br /><br /><br />
        <Link className="text" to="/forms/get-access">For decades success meant climbing "The Corporate Ladder" where your reward for excellence means spending the prime years of your career chasing a title and fixed salary that's often not even tied to your real work.</Link>
        <br /><br /><br />
        <Link className="text" to="/forms/get-access">At Shilll we unlock real ways for builders, solo entrepreneurs, and small teams to have flexibility and control over their base salary, equity preference, restricted stock units, and stock options.</Link>      
        <br /><br /><br />
        <Link className="text" to="/forms/get-access">Build your dreams. Find what you love. And enjoy a real taste of entrepreneurship without being afraid to fail.</Link>      
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
          <Link className="text" to="/about"><span className="gray">"</span> Enjoy a real taste of entrepreneurship without being afraid to fail.</Link>
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
        <h1>Get access</h1>
        <p>Request access to see what jobs are available.</p>
          <Link className="text" to="/forms/get-access">Get access →</Link>
      </div>
      <div className="box">
        <h1>Submit job</h1>
        <p>Submit a real job you want to hire for.</p>
          <Link className="text" to="/forms/submit-job">Submit job →</Link>
      </div>
      </div>
    </div>
    </div>
  );
}