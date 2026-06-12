import logo from "~/../public/img/ja.png";
import { Link } from "@remix-run/react";

import j from "~/../public/img/ja7.png";

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
        <img className="headerimg" src={j} alt="Shilll" />
      </div>
    </div>
  );
}