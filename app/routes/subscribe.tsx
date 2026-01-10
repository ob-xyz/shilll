import { Link } from "@remix-run/react";

import logo from "~/../public/img/ja1.png";
import header from "~/../public/img/ja3.png";

export default function Index() {
  return (
    <div className="subscribe-container">
      <div className="logo">
        <img src={logo} alt="Jeffamazon Logo" />
      </div>
      <div className="content">
        <div className="inner-content">
          <div className="text">
            <h4>SIGN UP FOR JEFFAMAZON</h4>
            <h1>Join 32K+</h1>
          </div>
      <form method="post" action="https://app.jeffamzn.com/subscription/form">
        <div className="input-wrapper">
          <input className="email" type="text" name="firstName" placeholder="First Name *" />
          <input className="email" type="text" name="lastName" placeholder="Last Name *" />
          <input className="email" type="email" name="email" required placeholder="Email Address *" />
          <button className="submit" type="submit">Send it</button>
        </div>
        <div className="h-captcha" data-sitekey="7e96e6a6-eef8-4624-be9c-e468b5a8b230"></div>
        <input id="6d48f" type="hidden" name="l" value="6d48fffe-7d37-4c14-b317-3e4cda33a647" />
        <input type="hidden" name="nonce" />
      </form>
        </div>
        <div className="inner-content1">
            <img src={header} alt="Jeffamazon newsletter image" />
        </div>
      </div>
      <div className="inner-content2">
      <h2>Start your day with <span>Jeffamazon</span></h2>
        <Link className="text" to="/subscribe">Don't waste good mornings scrolling to stay ahead. <span>Jeffamazon is the 1 min antidote keeping 32,000+ people in the loop</span> about what matters across the business world.</Link>
      </div>
    </div>
  );
}