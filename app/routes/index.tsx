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
            <p>Start, build, and get compensated for your contributions. Immediate vesting. Zero cliffs. Founder upside 🚀</p>
          </div>
        <div className="btn">
              <Link className="pricebtn" to="/request-access">Request access</Link>
        </div>
        </div>
      </div>
      <div className="inner-content2">
      <h2>Get more upside with <span>Shilll</span></h2>
        <Link className="text" to="/get-info">Shilll's mission is building the future of work with more upside for people who want to join, contribute, and leave companies without legal gymnastics or emotional debt.</Link>
        <br /><br /><br />
        <Link className="text" to="/get-info">For decades the only way to success was climbing "The Corporate Ladder" where your reward for excellence means spending the prime years of your career chasing a title and fixed salary that's eventually not even tied to your own performance or ideas.</Link>
        <br /><br /><br />
        <Link className="text" to="/get-info">At Shilll we offer builders, solo entrepreneurs, and small teams of up to five people more upside across base salary, equity preference, restricted stock units, and stock options.</Link>      
        <br /><br /><br />
        <Link className="text" to="/get-info">Get a real taste for the upsides of entrepreneurship without having to risk it all. Start, build, and get compensated for your contributions. Immediate vesting. Zero cliffs. And founder upside 🚀🚀🚀</Link>      
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
          <Link className="text" to="/about">" Most companies pretend stability still exists. I built this while hiring for Jeffamazon because I needed a way to compensate contributors like adults — not employees, not contractors, and not fake co-founders.</Link>
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
        <h1>Try now</h1>
        <p>Request access.</p>
          <Link className="text" to="/request-access">Request access →</Link>
      </div>
      <div className="box">
        <h1>Get info</h1>
        <p>Learn more.</p>
          <Link className="text" to="/get-info">Get info →</Link>
      </div>
      </div>
    </div>
    </div>
  );
}