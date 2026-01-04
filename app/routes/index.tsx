import { useEffect } from "react";

import logo from "~/../public/img/ja1.png";
import header from "~/../public/img/ja3.png";
import jeffamzn from "~/../public/img/jeffamazon.png";
import thepoast from "~/../public/img/thepoast.png";
import cs from "~/../public/img/cs.jpg";



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
            <h4>EMPOWERING INDIVIDUALS</h4>
            <h1>Scroll Less. Live More.</h1>
            <p>1-minute newsletters designed for your life 🚀</p>
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
      <h2>Say hello to <span>our growing family</span> of email newsletters</h2>
      <a title="subscription form" href="https://jeffamazon.com/subscribe"  rel="noopener noreferrer">
      <p>Shilll's mission is empowering individuals like me and you. Our signature style 1-minute newsletters are meticulously designed to scroll less, live more.</p>
      </a>
      </div>
        <div className="floatimg">
            <img src={jeffamzn} alt="Jeffamazon newsletter image" />
        </div>
      <div className="inner-content25">
       <h2><span>Jeffamazon</span></h2>
      <a title="jeffamazon home page" href="https://jeffamazon.com/"  rel="noopener noreferrer">
      <p>Daily business newsletter</p>
      </a>
      <div className="btn">
        <a title="subscription form" href="https://jeffamazon.com/subscribe"  rel="noopener noreferrer" className="pricebtn">
            Subscribe for free
        </a>
      </div>
      </div>
      <div className="floatimg">
            <img src={thepoast} alt="Jeffamazon newsletter image" />
        </div>
      <div className="inner-content25">
       <h2><span>The Poast</span></h2>
      <a title="the poast home" href="https://thepoast.com/"  rel="noopener noreferrer">
      <p>Weekly local newsletter</p>
      </a>
      <div className="btn">
        <a title="subscription form" href="https://thepoast.com/"  rel="noopener noreferrer" className="pricebtn">
            Subscribe for free
        </a>
      </div>
      </div>
      <div className="inner-content255">
        <div className="side1">
       <h2><span>LEADERSHIP</span></h2>
      <a title="the poast home" href="https://thepoast.com/"  rel="noopener noreferrer">
      <p>Founder</p>
      <p>Chris Signore</p>
      </a>
      <div className="btn">
        <a title="subscription form" href="https://thepoast.com/"  rel="noopener noreferrer" className="pricebtn">
            About
        </a>
      </div>
        </div>
        <div className="side2">
          <img src={cs} alt="Founder image" />
        </div>
      </div>
      <div className="inner-content25">
      <a title="the poast home" href="https://thepoast.com/"  rel="noopener noreferrer">
      <p>We believe in building seriously profitable businesses that help people live.</p>
      </a>
      <div className="tag">
      <p>
        CHRIS SIGNORE
      </p>
      <p>
        Founder
      </p>
      </div>
      </div>
       <div className="inner-content3">
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