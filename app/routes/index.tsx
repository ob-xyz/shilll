import { Link } from "@remix-run/react";

import logo from "~/../public/img/ja1.png";

export default function Index() {
  return (
    <div className="container">
      <div className="logo">
        <img src={logo} alt="Shilll Logo" />
      </div>
      <div className="content">
        <div className="inner-content">
          <div className="text">
            <h1>Designed in Canada</h1>
          </div>
        <div className="btn">
              <Link className="pricebtn" to="/profile/personal">Get in touch</Link>
        </div>
        </div>
      </div>
    </div>
  );
}