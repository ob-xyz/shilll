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
            <h1>Flexible pay. Unlimited upside.</h1>
            <p>Mix your compensation to fit your goals. <br />Get immediate vesting. Zero cliffs.</p>
          </div>
        <div className="btn">
              <Link className="pricebtn" to="/profile/builder">Create profile</Link>
        </div>
        </div>
      </div>
      <div className="inner-content2">
      <h2>Unleash your upside with <span>Shilll</span></h2>
        <Link className="text" to="/profile/enterprise">Shilll's mission is to unleash your upside.</Link>
        <br /><br /><br />
        <Link className="text" to="/profile/builder">Right now companies want to hire world-class builders, and they're not afraid to pay top-tier compensation to make it happen.</Link>
        <br /><br /><br />
        <Link className="text" to="/profile/builder">But compensation is complex. Everyone wants wildly different things. It depends on what stage of life you're in. What your interests are. And the goals you set or the plans that change.</Link>
        <br /><br /><br />
        <Link className="text" to="/profile/builder">At Shilll we simplify your compensation by giving you a single number of total compensation and sliders you can use to mix your compensation to match your goals.</Link>
        <br /><br /><br />
        <Link className="text" to="/profile/builder"><span>Saving for a down payment?</span> Go all cash.</Link>
        <br /><br /><br />
        <Link className="text" to="/profile/builder"><span>Willing to bet on yourself?</span> Up the equity.</Link>
        <br /><br /><br />
        <Link className="text" to="/profile/builder"><span>Want more options?</span> You know what to do.</Link>
        <br /><br /><br />
        <Link className="text" to="/profile/builder">Shilll is a perfect fit for seasoned builders, solo entrepreneurs, and small teams who care about their base salary, equity preference, restricted stock units, and stock options.</Link>      
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
          <Link className="text" to="/about"><span className="gray">"</span> Shilll offers a real taste of entrepreneurship without having to risk it all.</Link>
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
        <h1>Builder</h1>
        <p>Create a profile with your preferred comp</p>
          <Link className="text" to="/profile/builder">Builder →</Link>
      </div>
      <div className="box">
        <h1>Enterprise</h1>
        <p>Create a profile to get access to builders</p>
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