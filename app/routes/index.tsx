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
            <h1>Don't waste the best years of your career</h1>
            <p>Build a mix of world-class compensation.<br />Get immediate vesting with zero cliffs.<br />Be the master of your own destiny.</p>
          </div>
        <div className="btn">
              <Link className="pricebtn" to="/profile/personal">Create profile</Link>
        </div>
        </div>
      </div>
      <div className="inner-content2">
      <h2>Become the master of your own destiny with <span>Shilll</span></h2>
        <Link className="text" to="/profile/personal">Shilll's mission is to empower individuals to be the masters of their own destiny.</Link>
        <br /><br /><br />
        <Link className="text" to="/profile/personal">When it comes to being an entrepreneur getting started is always the hardest part. At Shilll we're making it easy for you to get a taste of entrepreneurship without risking it all.</Link>
        <br /><br /><br />
        <Link className="text" to="/profile/personal">Right now companies are not afraid to pay world-class compensation to hire individual engineers, builders, and contributors who can make things.</Link>
        <br /><br /><br />
        <Link className="text" to="/profile/personal">But compensation is complex. Everyone wants wildly different things. And life is never simple.</Link>
        <br /><br /><br />
        <Link className="text" to="/profile/personal">At Shilll we make it simple for you to be the master of your own destiny by giving you a single number of total compensation that you can mix between cash, RSUs, and options.</Link>
        <br /><br /><br />
        <Link className="text" to="/profile/personal"><span>Saving for a down payment?</span> Go all cash.</Link>
        <br /><br /><br />
        <Link className="text" to="/profile/personal"><span>Want to bet on yourself?</span> Up the equity.</Link>
        <br /><br /><br />
        <Link className="text" to="/profile/personal"><span>Need more options?</span> You're in control.</Link>
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
          <Link className="text" to="/about"><span className="gray">"</span> Shilll gives you a taste of entrepreneurship without having to risk it all.</Link>
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
        <h1>Personal</h1>
        <p>Set your preferred comp</p>
          <Link className="text" to="/profile/personal">Personal →</Link>
      </div>
      <div className="box">
        <h1>Enterprise</h1>
        <p>Get access to top talent</p>
          <Link className="text" to="/profile/enterprise">Enterprise →</Link>
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