import { Link } from "@remix-run/react";

import logo from "~/../public/img/ja1.png";
import thepoast from "~/../public/img/thepoast.png";
import header2 from "~/../public/img/jeffamazon.png";
import cs from "~/../public/img/cs.jpg";

export default function Index() {
  return (
    <div className="about-container">
      <div className="logo">
        <img src={logo} alt="Jeffamazon Logo" />
      </div>
      <div className="content">
        <div className="inner-content">
          <div className="text">
            <h4>Hey, I'm Chris</h4>
            <h1>Aspiring writer.<br />Aspiring entrepreneur.<br />Aspiring morning person.</h1>
            <p>But I'm best known for my daily newsletter Jeffamazon 🚀</p>
          </div>
      <div className="btn">
            <Link className="pricebtn" to="/subscribe">Subscribe</Link>
      </div>
        </div>
        <div className="inner-content1">
            <img src={cs} alt="Jeffamazon newsletter image" />
        </div>
      </div>
      <div className="inner-content2">
      <h2>Hey I'm <span>Chris Signore</span></h2>
          <Link className="text" to="/subscribe">I'm best known for my daily newsletter Jeffamazon.</Link>
          <br /><br /><br />
          <Link className="text" to="/subscribe">But I'm also an expert in company building and designing and engineering products I can share with YOU.</Link>
          <br /><br /><br />
          <Link className="text" to="/subscribe">A big joy in my life has been building things I can open source and freely share with others.</Link>
          <br /><br /><br />
          <Link className="text" to="/subscribe">So if you ever want your money back, the best way to reach me is <span>chris@jeffamazon.com</span></Link>
      </div>
      <div className="inner-content251">
          <Link className="text" to="/subscribe">My first products.</Link>
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
          <Link className="pricebtn" to="/subscribe">Subscribe for free</Link>
      </div>
      </div>
      </div>
            <div className="boxmat">
        <div className="floatimg">
            <img src={thepoast} alt="The Poast newsletter image" />
        </div>
      <div className="box">
        <h1>The Poast</h1>
        <p>Weekly local news</p>
      <div className="btn">
          <Link className="pricebtn" to="/subscribe">Subscribe for free</Link>
      </div>
      </div>
     </div>
      </div>
    </div>
      <div className="inner-content25">
          <Link className="text" to="/subscribe">" A big joy in my life is building things I can share with YOU.</Link>
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