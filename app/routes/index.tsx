import { useEffect } from "react";

import logo from "~/../public/img/ja1.png";
import header from "~/../public/img/ja3.png";

export default function Index() {
    useEffect(() => {
    // Dynamically load the hCaptcha script
    const script = document.createElement("script");
    script.src = "https://js.hcaptcha.com/1/api.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    // Clean up script on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="container">
      <div className="logo">
        <img src={logo} alt="Shilll Logo" />
      </div>
      <div className="content">
        <div className="inner-content">
          <div className="text">
            <h4>Elevate Your Life</h4>
            <h1>Scroll Less. Live More.</h1>
            <p>Shilll is a company for people like me and you. Subscribe to stay informed 🚀</p>
          </div>
      <form method="post" action="https://app.jeffamzn.com/subscription/form">
        <div className="input-wrapper">
          <input className="email" type="email" name="email" required placeholder="Email Address *" />
          <button className="submit" type="submit">Subscribe</button>
        </div>
        <div className="h-captcha" data-sitekey="7e96e6a6-eef8-4624-be9c-e468b5a8b230"></div>
        <input id="6d48f" type="hidden" name="l" value="6d48fffe-7d37-4c14-b317-3e4cda33a647" />
        <input type="hidden" name="nonce" />
      </form>
        </div>
        <div className="inner-content1">
            <img src={header} alt="Jeffamazon newsletter image" />
        </div>
      </div>
      <div className="inner-content2">
      <h2>Elevate your life with <span>Shilll</span></h2>
      <a title="subscription form" href="https://jeffamazon.com/subscribe"  rel="noopener noreferrer">
      <p>Shilll's mission is to elevate the knowledge of society. Our 1-minute newsletters are meticulously designed to elevate your life with timely information that's enjoyable to read.</p>
      </a>
      </div>
       <div className="inner-content3">
      <div className="header">
          <h4>Get started</h4>
          <h3>Build your own empire</h3>
      </div>
      <div className="grid">
      <div className="box">
        <h1>Build</h1>
        <p>Want to start & build a newsletter with us?</p>
        <a title="get in touch" href="mailto:chris@shilll.com"  rel="noopener noreferrer">Get in touch →</a>
      </div>
      <div className="box">
        <h1>Grow</h1>
        <p>Raising funding? We're occasional investors.</p>
        <a title="get in touch" href="mailto:chris@shilll.com"  rel="noopener noreferrer">Get in touch →</a>
      </div>
      </div>
    </div>
    </div>
  );
}