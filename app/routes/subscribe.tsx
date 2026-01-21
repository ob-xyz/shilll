import { Link } from "@remix-run/react";
import Altcha from "../components/altcha";

import logo from "~/../public/img/ja1.png";
import header from "~/../public/img/spoon.png";

export default function Index() {
  return (
    <div className="subscribe-container">
      <div className="logo">
        <img src={logo} alt="Shilll Logo" />
      </div>
      <div className="content">
        <div className="inner-content">
          <div className="text">
            <h4>WANNA MAKE SOMETHING?</h4>
            <h1>Let's talk.</h1>
          </div>
      <form method="post" action="https://app.jeffamzn.com/subscription/form">
        <div className="input-wrapper">
          <input className="email" type="text" name="firstName" placeholder="First Name *" />
          <input className="email" type="text" name="lastName" placeholder="Last Name *" />
          <input className="email" type="email" name="email" required placeholder="Email Address *" />
          <button className="submit" type="submit">Send it</button>
        </div>
        <Altcha />
        <input id="6d48f" type="hidden" name="l" value="6d48fffe-7d37-4c14-b317-3e4cda33a647" />
        <input type="hidden" name="nonce" />
      </form>
        </div>
        <div className="inner-content1">
            <img src={header} alt="Jeffamazon newsletter image" />
        </div>
      </div>
      <div className="inner-content2">
      <h2><span>Shilll</span> is a physical goods company</h2>
        <Link className="text" to="/subscribe">Shilll's mission is empowering individuals to make physical things. Currently we're designing and engineering a backbone support system that enables solo entrepreneurs and small teams to make something exist in the world. If you'd like to join our mission contact <span>chris@shilll.com</span></Link>
      </div>
    </div>
  );
}