import { Link } from "@remix-run/react";

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
            <h1>The one person company.</h1>
            <p>Hey, I'm Chris.</p>
          </div>
        <div className="btn">
              <Link className="pricebtn" to="/profile/personal">Get in touch</Link>
        </div>
        </div>
      </div>
      <div className="inner-content2">
      <h2>Hey I'm <span>Chris Signore</span></h2>
        <Link className="text" to="/profile/personal">I'm best known for my newsletter <span>Jeffamazon</span>.</Link>
        <br /><br /><br />
        <Link className="text" to="/profile/personal">But I'm actually just a one man band who likes to build things.</Link>
        <br /><br /><br />
        <Link className="text" to="/profile/personal">If you want to get in touch with me the best way to reach me is <span>chris@shilll.com</span></Link>
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
          <Link className="text" to="/about"><span className="gray">"</span> I just want to make something exist in the world.</Link>
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
        <h1>Contact</h1>
        <p>Get in touch by email.</p>
          <Link className="text" to="/profile/personal">Get in touch →</Link>
      </div>
      <div className="box">
        <h1>Sign up</h1>
        <p>Sign up to Jeffamazon.</p>
          <Link className="text" to="/profile/enterprise">Sign up →</Link>
      </div>
      </div>
    </div>
          {/* <div className="floatimg">
          <img src={header2} alt="Jeffamazon newsletter image" />
      </div>
      <div className="inner-content25">
       <h2><span>Jeffamazon</span></h2>
          <p><a className="pricebtn" href="https://jeffamazon.com/subscribe">Check out our daily newsletter</a></p>
      <div className="btn">
          <a className="pricebtn" href="https://jeffamazon.com/subscribe">Subscribe for free</a>
      </div>
      </div> */}
    </div>
  );
}