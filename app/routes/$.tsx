import { Link } from "@remix-run/react";

import li from "~/../public/img/social/linkedin.png";
import x from "~/../public/img/social/x.png";
import info from "~/../public/img/social/info.png";
import j from "~/../public/img/ja7.png";
import tp from "~/../public/img/ja.png";

export default function Index() {
  return (
    <div className="container">
      <div className="header">
        <img className="logo" src={tp} alt="The Poast Logo" />
        <p>Keep up with sports in just one minute</p>
        <p>Join 12,000 readers for <a href="/today">one daily email</a></p>        
        <div className="outer-header">
          <div className="inner-header">
            <div className="social">
              <a className="x" href="https://x.com/shilllsports" target="_blank" rel="noopener noreferrer">
                <img src={x} alt="X (Twitter)" />
              </a>
              <a className="li" href="https://linkedin.com/company/shilllsports" target="_blank" rel="noopener noreferrer">
                <img src={li} alt="LinkedIn" />
              </a>
              <Link className="info" to="/info">
                <img src={info} alt="More Info" />
              </Link>
            </div>
          </div>
          <div className="inner-header2">
            <Link to="/subscribe">Subscribe</Link>
          </div>
        </div>
        <img className="headerimg" src={j} alt="The Poast" />
                <div className="err">
            <h1>404 | This page could not be found.</h1>
        </div>
      </div>
    </div>
  );
}