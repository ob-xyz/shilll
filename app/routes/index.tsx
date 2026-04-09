import { Link } from "@remix-run/react";
import logo from "~/../public/img/ja1.png";
import pic from "~/../public/img/pic.png";

export default function Index() {
  return (
    <div className="container">
      <div className="logo">
        <img src={logo} alt="Shilll Logo" />
      </div>
      <div className="content">
        <div className="inner-content">
        {/* <h1>See what's new from your friends.</h1>
        <img src={pic} alt="Shilll Logo" /> */}
        <div className="btn">
              <Link className="pricebtn" to="/profile/personal">Get in touch</Link>
        </div>
        </div>
      </div>
    </div>
  );
}