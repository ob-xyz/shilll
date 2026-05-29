import { Link } from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import Altcha from "../components/altcha";
import scroll from "~/style/scss/components/showscroll.css";

import bg from "~/../public/img/tpbg.png";
import cs from "~/../public/img/cs.jpg";
import li from "~/../public/img/social/linkedin.png";
import x from "~/../public/img/social/x.png";
import jeff from "~/../public/img/social/jeffamazon.png";
import tp from "~/../public/img/social/poast.png";
import info from "~/../public/img/social/info.png";
import logo from "~/../public/img/ja.png";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: scroll },
];
export default function Index() {
  return (
    <div className="moreinfo-container">
      <div className="header">
        <img className="logo" src={logo} alt="Shilll Logo" />
        <div className="outer-header">
          <div className="inner-header">
            <div className="social">
              <Link className="x" to="/thepoast">
                <img src={tp} alt="The Poast" />
              </Link>
              <Link className="li" to="/jeffamazon">
                <img src={jeff} alt="Jeffamazon" />
              </Link>
              <Link className="infoactive" to="/info">
                <img src={info} alt="More Info" />
              </Link>
            </div>
          </div>
          <div className="inner-header2">
             <Link to="/">Home</Link>
          </div>
        </div>
      </div>
        <div className="inner-container">
            <img className="headerimg" src={bg} alt="Jeffamazon Background" />
            <div className="profile-outside">
            <div className="profile">
                <a href="https://linkedin.com/in/chrissignore" target="_blank" rel="noopener noreferrer">
                <img className="headerimg" src={cs} alt="It's me (Chris Signore)" />
                <div className="inner-profile">
                    <h1>Chris Signore</h1>
                    <div className="social">
                        <a className="li" href="https://linkedin.com/in/chrissignore" target="_blank" rel="noopener noreferrer">
                            <img src={li} alt="LinkedIn" />
                        </a>
                        <a className="x" href="https://x.com/chrissignore" target="_blank" rel="noopener noreferrer">
                            <img src={x} alt="X (Twitter)" />
                        </a>
                    </div>
                </div>
                </a>
            </div>
            <div className="subscribe">
                <h1>Advertise with us</h1>
                <div className="logo-grid">
                    <form method="post" action="https://app.shilll.com/subscription/form">
                    <div className="input-wrapper">
                    <input className="email" type="text" name="firstName" placeholder="First Name *" />
                    </div>
                    <div className="input-wrapper">
                        <input className="email" type="email" name="email" required placeholder="Email Address *" />
                        <button className="submit" type="submit">Subscribe</button>
                    </div>
                    <Altcha />
                    <input id="36b8c" type="hidden" name="l" checked value="36b8c160-7d12-4103-aaba-8e3cd90d9d64" />
                    <input type="hidden" name="nonce" />
                    </form>
                </div>
            </div>
            </div>
        </div>
    </div>
  );
}