import { Link } from "@remix-run/react";
import email from "~/../public/img/email.png";

export default function Footer() {
  return (
<footer className="footer">
  <h1>Shilll</h1>
<div className="footer-top">
  <div className="footer-signup">
     <Link className="newacc" to="/profile/personal">Get in touch</Link>
  </div>

<div className="footer-links">
    <div className="column">
    <h4>Get The Poast</h4>
      <a title="email us" href="https://thepoast.com">The Poast</a>
    </div>
</div>
</div>

<div className="footer-bottom">
  <div className="footer-meta">
    <Link to="/policies/privacy">Privacy Policy</Link>
  </div>
  <div className="footer-social">
  <a href="mailto:chris@shilll.com">
    <img src={email} alt="Email us" />
  </a>
  </div>
</div>
</footer>
  );
}
