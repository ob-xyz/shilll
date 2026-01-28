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
            <p>Get world-class compensation for making things.<br />Enjoy immediate vesting with zero cliffs.<br />Mix compensation to fit your goals.</p>
          </div>
        <div className="btn">
              <Link className="pricebtn" to="/profile/personal">Create profile</Link>
        </div>
        </div>
      </div>
      <div className="inner-content2">
      <h2>Build your career with <span>Shilll</span></h2>
        <Link className="text" to="/profile/personal">Shilll's mission is to give every builder a taste of entrepreneurship.</Link>
        <br /><br /><br />
        <Link className="text" to="/profile/personal">Right now companies are hiring real builders who love making things, and they're not afraid to pay world-class compensation to make it happen.</Link>
        <br /><br /><br />
        <Link className="text" to="/profile/personal">But compensation is complex. Everyone wants wildly different things. Your stage in life matters. Are you setting goals? Or looking for more options.</Link>
        <br /><br /><br />
        <Link className="text" to="/profile/personal">At Shilll we help you build something you'll remember and get world-class compensation while doing it. Enjoy one single number that representats your total compensation and use sliders to mix between cash, RSUs, and stock options.</Link>
        <br /><br /><br />
        <Link className="text" to="/profile/personal"><span>Saving for a down payment?</span> Go all cash.</Link>
        <br /><br /><br />
        <Link className="text" to="/profile/personal"><span>Willing to bet on yourself?</span> Up the equity.</Link>
        <br /><br /><br />
        <Link className="text" to="/profile/personal"><span>Want more options?</span> You know what to do.</Link>
        <br /><br /><br />
        <Link className="text" to="/profile/personal">It's the pefect fit for seasoned builders, solo entrepreneurs, and small teams who want to spend the best years of their career getting world-class compensation for making things people love.</Link>      
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
          <Link className="text" to="/about"><span className="gray">"</span> Shilll gives a taste of entrepreneurship without having to risk it all.</Link>
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