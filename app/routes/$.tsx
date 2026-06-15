import { Link } from "@remix-run/react";

import logo from "~/../public/img/ja.png";

export default function Index() {
  return (
    <div className="container">
      <div className="header">
        <img className="logo" src={logo} alt="Shilll Logo" />
        <div className="outer-header">
          <div className="inner-header2">
            <Link to="/contact">Contact</Link>
          </div>
        </div>
                <div className="err">
            <h1>404 | This page could not be found.</h1>
        </div>
      </div>
    </div>
  );
}