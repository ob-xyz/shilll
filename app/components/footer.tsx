import { Link } from "@remix-run/react";
import Altcha from "./altcha";

import linkedin from "~/../public/img/in.png";
import x from "~/../public/img/x.png";
import email from "~/../public/img/email.png";

export default function Footer() {
  return (
<footer className="footer">

  <h1>Shilll</h1>

<div className="footer-top">
  <div className="footer-signup">
    <h1>see what's new.</h1>
     <Link className="newacc" to="/profile/personal">Let's see</Link>
  </div>

<div className="footer-links">
  <div className="column">
    <h4>Shilll</h4>
    <Link to="/">Home</Link>
    {/* <Link to="/">Log in</Link> */}
  </div>
    <div className="column">
    <h4>Contact</h4>
    <a title="email us" href="mailto:chris@shilll.com">Get in touch</a>
    </div>
</div>
</div>

<div className="footer-bottom">
  <div className="footer-meta">
    <Link to="/policies/privacy">Privacy Policy</Link>
  <a href="https://policies.google.com/terms?hl=en-US" target="_blank" rel="noopener noreferrer">
    Terms of Service
  </a>
  </div>
  <div className="footer-social">
  <a href="https://x.com/shilllapp" target="_blank" rel="noopener noreferrer">
    <img src={x} alt="LinkedIn" />
  </a>
  <a href="https://linkedin.com/company/signore" target="_blank" rel="noopener noreferrer">
    <img src={linkedin} alt="LinkedIn" />
  </a>
  <a href="mailto:chris@shilll.com">
    <img src={email} alt="Email us" />
  </a>
  </div>
</div>
</footer>
  );
}
