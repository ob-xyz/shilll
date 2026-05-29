import { Link } from "@remix-run/react";
import Altcha from "../components/altcha";

import jeff from "~/../public/img/social/jeffamazon.png";
import tp from "~/../public/img/social/poast.png";
import info from "~/../public/img/social/info.png";
import j from "~/../public/img/ja7.png";
import logo from "~/../public/img/ja.png";
export default function Index() {
  return (
    <div className="ads-container">
      <div className="header">
        <img className="logo" src={logo} alt="The Poast Logo" />
        <p>Interested in advertising with Shilll?</p>
        <p>Contact us for information on setting up a campaign that helps you grow your business!</p>        
        <div className="outer-header">
          <div className="inner-header">
            <div className="social">
              <Link className="x" to="/thepoast">
                <img src={tp} alt="The Poast" />
              </Link>
              <Link className="li" to="/jeffamazon">
                <img src={jeff} alt="Jeffamazon" />
              </Link>
              <Link className="info" to="/info">
                <img src={info} alt="More Info" />
              </Link>
            </div>
          </div>
          <div className="inner-header2">
             <Link to="/">Home</Link>
          </div>
        </div>
          <form method="post" action="https://app.shilll.com/subscription/form">
          <div className="input-wrapper">
            <input className="email" type="text" name="firstName" placeholder="Your Name *" />
          </div>
          <div className="input-wrapper">
            <input className="email" type="email" name="email" required placeholder="Business Email Address *" />
            <button className="submit" type="submit">Submit</button>
          </div>
          <Altcha />
<<<<<<< HEAD:app/routes/canadapoast.tsx
              <input id="bcd05" type="hidden" name="l" checked value="bcd05274-b4b9-4a90-a8b5-1fdee92637fa" />
=======
          <input id="bcd05" type="hidden" name="l" checked value="bcd05274-b4b9-4a90-a8b5-1fdee92637fa" />
>>>>>>> parent of e2cced1e (11221122):app/routes/advertise-with-us.tsx
          <input type="hidden" name="nonce" />
        </form>
          <img className="headerimg" src={j} alt="Instagram" />
      </div>
    </div>
  );
}