import { Link } from "@remix-run/react";

import logo from "~/../public/img/ja.png";

export default function Index() {
  return (
    <div className="container">
      <div className="header">
        <div className="nav">
        <img className="logo" src={logo} alt="Shilll Logo" />
        </div>
          <div className="outer-header">
          <div className="inner-header2">
            <p>Something new.</p>
            <Link to="/access">Sign Up</Link>
          </div>
        <p className="priv">By creating an account, you agree to our <Link to="/policies/privacy">Privacy Policy</Link> and to receive account-related emails including verification, security alerts, and service notifications.</p>
        </div>
      </div>
    </div>
  );
}