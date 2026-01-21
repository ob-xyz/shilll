import { Link } from "@remix-run/react";

import logo from "~/../public/img/ja1.png";
import header from "~/../public/img/ja3.png";
import header2 from "~/../public/img/ja6.png";
import header3 from "~/../public/img/ja7.png";
import cs from "~/../public/img/cs.jpg";

export default function Index() {
  return (
    <div className="about-container">
      <div className="logo">
        <img src={logo} alt="Shilll Logo" />
      </div>
      <div className="content">
        <div className="inner-content">
          <div className="text">
            <h4>Hey, I'm Chris</h4>
            <h1>Aspiring writer.<br />Aspiring entrepreneur.<br />Aspiring morning person.</h1>
            <p>But I'm best known for my newsletters Jeffamazon 🚀</p>
          </div>
      <div className="btn">
            <Link className="pricebtn" to="/subscribe">Subscribe</Link>
      </div>
        </div>
        <div className="inner-content1">
            <img src={cs} alt="Shilll image" />
        </div>
      </div>
      <div className="inner-content2">
      <h2><span>Is it go time?</span></h2>
          <Link className="text" to="/subscribe">I'm best known for my newsletter Jeffamazon.</Link>
          <br /><br /><br />
          <Link className="text" to="/subscribe">But I'm really just a bootstrapped solo entrepreneur trying to figure out how to design and engineer things I want to exist in the world.</Link>
          <br /><br /><br />
          <Link className="text" to="/subscribe">Wanna get in touch? the best way to reach me is <span>chris@shilll.com</span></Link>
      </div>
      <div className="inner-content3sm">
      <div className="grid">
      <div className="boxmat">
         <div className="floatimg">
          <img src={header2} alt="Jeffamazon newsletter image" />
      </div>
      <div className="box">
        <h1>Jeffamazon</h1>
        <p>Daily business news</p>
      <div className="btn">
          <a className="pricebtn" href="https://jeffamazon.com/subscribe">Subscribe for free</a>
      </div>
      </div>
      </div>
      </div>
    </div>
      <div className="inner-content25">
          <Link className="text" to="/subscribe">" Just make something.</Link>
      <div className="tag">
      <p>
        CHRIS SIGNORE
      </p>
      <p>
        Founder
      </p>
      </div>
      </div>
    </div>
  );
}