import { Link } from "@remix-run/react";
import Altcha from "../components/altcha";

import logo from "~/../public/img/ja1.png";
import header2 from "~/../public/img/ads/recads.png";
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
            <h1>Shilll offers founder level compensation for people who make things</h1>
            <p>Sign up to stay informed 🚀</p>
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
      </div>
      <div className="inner-content2">
      <h2>A compensation package as flexible as your active life</h2>
        <Link className="text" to="/subscribe">Shilll's mission is to help you win life and live well.</Link>
        <br /><br /><br />
        <Link className="text" to="/subscribe">For decades, the only path to success was climbing "The Ladder" where you trade the prime years of your career to chase a title in a hierarchy designed to make you feel small.</Link>
        <br /><br /><br />
        <Link className="text" to="/subscribe">At Shilll we look for high-agency individuals, solo entrepreneurs, and small teams of up to 5 people who are obssessed with the craft of making things.</Link>
        <br /><br /><br />
        <Link className="text" to="/subscribe">If you're a "well-rounded" employee who likes gold stars, then Shilll won't be a good fit for you.</Link>
        <br /><br /><br />
        <Link className="text" to="/subscribe">We look for people who build real value and need flexible compensation to keep up with their growing lifestyle.</Link>
        <br /><br /><br />
        <Link className="text" to="/subscribe">Shilll allows people at existing companies, solo entrepreneurs, or even small teams of up to five people to choose their compensation by mixing base salary, equity preference, restricted stock units, or stock options.</Link>
      </div>
      <div className="floatimg">
          <img src={header2} alt="Jeffamazon newsletter image" />
      </div>
      <div className="inner-content25">
       <h2><span>Jeffamazon</span></h2>
            <Link className="text" to="/subscribe">Get our daily business newsletter delivered straight to your inbox</Link>
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
          <Link className="text" to="/about">" Shilll is for people who like winning and living well.</Link>
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