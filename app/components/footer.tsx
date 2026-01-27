import { Link } from "@remix-run/react";
import Altcha from "./altcha";

import linkedin from "~/../public/img/in.png";
import email from "~/../public/img/email.png";

export default function Footer() {
  return (
<footer className="footer">

  <h1>Shilll</h1>

<div className="footer-top">
  <div className="footer-signup">
    <h1>Screw it, let's do it.</h1>
          <p>Start maximizing your career 🚀</p>
    <form method="post" action="https://app.jeffamzn.com/subscription/form">
      <div className="input-wrapper">
        <input className="email" type="email" name="email" required placeholder="Email Address *" />
        <button className="submit" type="submit">Let's do it</button>
      </div>
        <Altcha />
      <input id="6d48f" type="hidden" name="l" value="6d48fffe-7d37-4c14-b317-3e4cda33a647" />
      <input type="hidden" name="nonce" />
    </form>
  </div>

<div className="footer-links">
  <div className="column">
    <h4>Shilll</h4>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
  </div>
    <div className="column">
    <h4>Profile</h4>
    <Link to="/profile/builder">Builder</Link>
    <Link to="/profile/enterprise">Enterprise</Link>
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
