import { Link } from "@remix-run/react";

import jeff from "~/../public/img/social/jeffamazon.png";
import tp from "~/../public/img/social/poast.png";
import info from "~/../public/img/social/info.png";
import j from "~/../public/img/ja7.png";
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