import { Link, Form } from "@remix-run/react";

import logo from "~/../public/img/ja.png";

export default function Index() {
  return (
    <div className="container">
      <div className="header">
        <div className="nav">
        <img className="logo" src={logo} alt="The Poast Logo" />
        </div>
          <div className="outer-header">
          <div className="inner-header2">
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </div>
  );
}