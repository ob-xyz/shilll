import { Link } from "@remix-run/react";
import Altcha from "../components/altcha";

import tp from "~/../public/img/social/poast.png";
import info from "~/../public/img/social/info.png";
import j from "~/../public/img/ja7.png";
import logo from "~/../public/img/ja.png";
export default function Index() {
  return (
    <div className="subscribe-container">
      <div className="header">
        <img className="logo" src={logo} alt="Shilll Logo" />
        <div className="outer-header">
          <div className="inner-header">
            <div className="social">
              <Link className="x" to="/thepoast">
                <img src={tp} alt="The Poast" />
              </Link>
              <Link className="cp" to="/canadapoast">
                <img src={tp} alt="Canada Poast" />
              </Link>
              <Link className="info" to="/info">
                <img src={info} alt="More Info" />
              </Link>
            </div>
          </div>
          <div className="inner-header2">
             <Link to="/">Home</Link>
          </div>
        </div>
          <form method="post" action="https://app.shilll.com/subscription/form">
          <div className="input-wrapper">
            <input className="email" type="text" name="firstName" placeholder="First Name *" />
          </div>
          <div className="input-wrapper">
            <input className="email" type="email" name="email" required placeholder="Business Email Address *" />
            <button className="submit" type="submit">Submit</button>
          </div>
          <Altcha />
          <input id="36b8c" type="hidden" name="l" checked value="36b8c160-7d12-4103-aaba-8e3cd90d9d64" />
          <input type="hidden" name="nonce" />
        </form>
          <img className="headerimg" src={j} alt="Instagram" />
      </div>
    </div>
  );
}