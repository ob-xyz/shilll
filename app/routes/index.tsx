import logo from "~/../public/img/ja.png";
import { Link } from "@remix-run/react";

import info from "~/../public/img/social/info.png";
import j from "~/../public/img/ja7.png";

export default function Index() {
  return (
    <div className="container">
      <div className="header">
        <img className="logo" src={logo} alt="The Poast Logo" />
        <div className="outer-header">
          <div className="inner-header2">
            <Link to="/contact">Contact</Link>
          </div>
        </div>
        <img className="headerimg" src={j} alt="The Poast" />
      </div>
    </div>
  );
}